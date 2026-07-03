import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import SubscriptionTable from "../../Components/SubscriptionTable/SubscriptionTable";
import { useState } from "react";
import Search from "../../Components/Search/Search";
import { subscriptions as initialData } from "../../services/subscriptionData";
import { useAuth } from "../../context/AuthContext";

export default function Subscriptions() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const [search, setSearch] = useState("");

  const [tableData, setTableData] = useState(() => {
    const saved = localStorage.getItem("subsData");

    return saved ? JSON.parse(saved) : initialData;
  });

  const handleDelete = (id) => {
    console.log("O'chirish tugmasi bosildi, ID:", id);

    const updatedData = tableData.filter(
      (item) => Number(item.id) !== Number(id),
    );

    setTableData(updatedData);
    localStorage.setItem("subsData", JSON.stringify(updatedData));
  };

  const filteredSubscriptions = tableData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MainLayout>
      <h1>Subscriptions</h1>

      <Search search={search} setSearch={setSearch} />

      <br />
      <br />

      {isAdmin && (
        <Link to="/subscriptions/add">
          <button>Add Subscription</button>
        </Link>
      )}

      <br />
      <br />

      <SubscriptionTable
        subscriptions={filteredSubscriptions}
        onDelete={handleDelete}
      />
    </MainLayout>
  );
}