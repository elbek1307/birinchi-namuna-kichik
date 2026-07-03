import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Subscriptions from "../pages/Subscriptions/Subscriptions";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import AddSubscription from "../pages/AddSubscription/AddSubscription";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subscriptions"
        element={
          <ProtectedRoute>
            <Subscriptions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subscriptions/add"
        element={
          <ProtectedRoute>
            <AddSubscription />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
