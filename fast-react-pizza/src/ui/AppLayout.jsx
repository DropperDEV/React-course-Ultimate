import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <main>
        <h1>Content</h1>
      </main>
      <Outlet />
      <CartOverview />
    </div>
  );
}
