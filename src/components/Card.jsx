import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="price">${product.price}</p>
        <Link className="details-btn" to={`/shop/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}
