import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useNavigate } from "react-router-dom"; 
import { subscriptions as initialData } from "../../services/subscriptionData";

const AddSubscription = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nextPayment, setnextPayment] = useState("")
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const savedData = JSON.parse(localStorage.getItem("subsData")) || initialData;

   
    const newSubscription = {
      id: Date.now(),
      name,
      nextPayment,
      price,
      status,
    };

    
    const updatedData = [...savedData, newSubscription];

   
    localStorage.setItem("subsData", JSON.stringify(updatedData));

   
    navigate("/subscriptions");
  };

  return (
    <MainLayout>
      <h1>Add Subscription</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subscription name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <input type="date"
        placeholder="nexPayment"
        value={nextPayment}
        onChange={(e) => setnextPayment(e.target.value)}/>
        
        <br />
        <br />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>

        <br />
        <br />

        <button type="submit">Save</button>
      </form>
    </MainLayout>
  );
};

export default AddSubscription;