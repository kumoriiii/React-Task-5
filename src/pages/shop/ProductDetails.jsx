import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div>
      <h3>{product.title}</h3>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <img src={product.thumbnail} alt={product.title} width="200" />
    </div>
  );
}
