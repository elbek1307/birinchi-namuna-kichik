import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Subscribe Master</h2>

      <p>{user?.name}</p>

      <hr />
    </div>
  );
}