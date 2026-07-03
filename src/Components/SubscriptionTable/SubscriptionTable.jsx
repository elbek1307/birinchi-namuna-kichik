import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SubscriptionTable({ subscriptions, onDelete }) {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>time</th>
          {isAdmin && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
            <td>{item.nextPayment}</td>
            {isAdmin && (
              <td>
                <Link to={`/subscriptions/edit/${item.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}