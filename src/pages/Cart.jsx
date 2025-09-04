import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />
            <div className="card-body">
              <h4>{item.title}</h4>
              <p className="price">${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div style={{ display: "flex", gap: "6px" }}>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                  style={{
                    cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                    opacity: item.quantity === 1 ? 0.5 : 1,
                  }}
                >
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button
        onClick={() => dispatch(clearCart())}
        style={{ marginTop: "10px" }}
      >
        Clear Cart
      </button>
    </div>
  );
}
