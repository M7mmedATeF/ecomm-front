import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [products, setProudcts] = useState([]);

  const getProductsIndex = async () => {
    const res = await axios.get("http://localhost:3000/products");

    if (res.status >= 200 && res.status < 300) {
      setProudcts(res.data);
      setError(null);
    } else {
      setError(res.statusText);
      setProudcts([]);
    }
  };

  useEffect(() => {
    getProductsIndex();
  }, []);

  return (
    <>
      {error != null && <p>{error}</p>}

      <div className="container product-list">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product._id}
              data={product}
              onDelete={getProductsIndex}
            />
          ))}
      </div>
    </>
  );
}

export default App;
