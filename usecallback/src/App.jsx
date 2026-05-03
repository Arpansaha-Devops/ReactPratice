import React, { useState, useCallback } from "react";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

function App() {
  const [cart, setCart] = useState([]);

  // ✅ useCallback → stable function reference
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <>
      <h2>Products</h2>

      <ProductList products={productsData} onAdd={handleAddToCart} />

      <CartSummary cart={cart} />
    </>
  );
}

export default App;