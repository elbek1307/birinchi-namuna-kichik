import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <h3>Menu</h3>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}