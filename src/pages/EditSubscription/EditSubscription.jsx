import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EditSubscription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nextPayment, setnextPayment] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("subsData")) || [];
    const currentItem = savedData.find((item) => item.id === Number(id));

    if (currentItem) {
      setName(currentItem.name);
      setPrice(currentItem.price);
      setnextPayment(currentItem.nextPayment);
      setStatus(currentItem.status);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem("subsData")) || [];

    const updatedData = savedData.map((item) =>
      item.id === Number(id) ? { ...item, name, price, nextPayment, status } : item
    );

    localStorage.setItem("subsData", JSON.stringify(updatedData));
    navigate("/subscriptions");
  };

  return (
    <MainLayout>
      <h1>Edit Subscription</h1>

      {!isAdmin && <p>Siz bu obunani faqat ko'rishingiz mumkin.</p>}

      <form onSubmit={handleUpdate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          disabled={!isAdmin}
        />
        <br /><br />
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          disabled={!isAdmin}
        />
        <br /><br />

        <input
          type="date"
          placeholder="nexPayment"
          value={nextPayment}
          onChange={(e) => setnextPayment(e.target.value)}
          disabled={!isAdmin}
        />
        <br /><br />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          disabled={!isAdmin}
        >
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
        <br /><br />

        {isAdmin && <button type="submit">Update</button>}
      </form>
    </MainLayout>
  );
}