import { subscriptions } from "../../services/subscriptionData";

export default function SubscriptionTable({ subscriptions }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {subscriptions.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.status}</td>

            <td>
              <button>Edit</button>

              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}