import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductsList from "./pages/shop/ProductsList";
import ProductDetails from "./pages/shop/ProductDetails";
import AllProductsRedux from "./pages/shop/AllProductsRedux";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />}>
          <Route index element={<p>Select a category from the sidebar</p>} />
          <Route path="all" element={<AllProductsRedux />} />
          <Route path="category/:name" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Cart />} />
      </Routes>
    </div>
  );
}
