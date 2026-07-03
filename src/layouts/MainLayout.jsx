import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", gap: "30px" }}>
        <Sidebar />

        <main>{children}</main>
      </div>
    </>
  );
}