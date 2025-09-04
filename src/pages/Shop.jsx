import { Outlet } from "react-router-dom";
import Sidebar from "./shop/Sidebar";

export default function Shop() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", marginRight: "20px" }}>
        <Sidebar />
      </aside>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <h2>Shop Page</h2>
        <Outlet />
      </main>
    </div>
  );
}
