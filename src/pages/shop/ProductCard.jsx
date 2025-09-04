import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="price">${product.price}</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <Link to={`/shop/products/${product.id}`} className="details-btn">
            View Details
          </Link>
          <button
            className="details-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
