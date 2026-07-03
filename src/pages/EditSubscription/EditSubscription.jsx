import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSubscription() {
  const { id } = useParams(); 
  const navigate = useNavigate();

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
      setnextPayment(currentItem.nextPayment)
      setStatus(currentItem.status);
    }
  }, [id]);


  const handleUpdate = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem("subsData")) || [];
    
 
    const updatedData = savedData.map((item) =>
      item.id === Number(id) ? { ...item, name, price,nextPayment, status } : item
    );

    localStorage.setItem("subsData", JSON.stringify(updatedData));
    navigate("/subscriptions"); 
  };

  return (
    <MainLayout>
      <h1>Edit Subscription</h1>
      
      <form onSubmit={handleUpdate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br /><br />
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <br /><br />

        <input type="date" 
        placeholder="nexPayment"
        value={nextPayment}
        onChange={(e) => setnextPayment(e.target.value)}/>
        <br /><br />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </MainLayout>
  );
}