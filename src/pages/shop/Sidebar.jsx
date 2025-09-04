import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div>
      <h3>Categories</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to={`/shop/all`}>All Products</Link>
        </li>
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link to={`/shop/category/${cat.slug}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
