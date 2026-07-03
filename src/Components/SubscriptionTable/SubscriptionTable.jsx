import React from "react";
import { Link } from "react-router-dom";

export default function SubscriptionTable({ subscriptions, onDelete }) {
  return (
    <table border="1" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
            <td>{item.nextPayment}</td>
            <td>
              <Link to={`/subscriptions/edit/${item.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}