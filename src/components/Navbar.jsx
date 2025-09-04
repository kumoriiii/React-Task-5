import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About
      </Link>
      <Link to="/shop" style={{ marginRight: "10px" }}>
        Shop
      </Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
