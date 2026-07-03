import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { useState } from "react";

const AddSubscription = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Active");
  const [subscriptions, setSubscriptions] = useState(data);


  const handleSubmit = (e) => {
  e.preventDefault();

  const newSubscription = {
    name,
    price,
    status,
  };

  setSubscriptions([
  ...subscriptions,
  {
    id: Date.now(),
    name,
    price,
    status,
  },
]);
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
