import MainLayout from "../../layouts/MainLayout";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <h3>Xush kelibsiz</h3>

      <p>{user?.name}</p>

      <p>{user?.email}</p>
    </MainLayout>
  );
}