import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const { name } = useParams(); // category slug
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, [name]);

  return (
    <div>
      <h3>Products in "{name}"</h3>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
