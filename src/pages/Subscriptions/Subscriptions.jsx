import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import SubscriptionTable from "../../Components/SubscriptionTable/SubscriptionTable";

import { useState } from "react";
import Search from "../../Components/Search/Search";
import { subscriptions as data } from "../../services/subscriptionData";

export default function Subscriptions() {
  const [search, setSearch] = useState("");

  const filteredSubscriptions = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <MainLayout>
      <h1>Subscriptions</h1>

      <Search search={search} setSearch={setSearch} />

      <br />
      <br />

      <Link to="/subscriptions/add">
  <button>Add Subscription</button>
</Link>

<br />
<br />

      <SubscriptionTable subscriptions={filteredSubscriptions} />
    </MainLayout>
  );
}
