import React, { useState, useMemo } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAdd }) => {
  const [search, setSearch] = useState("");

  // ✅ useMemo → expensive filtering
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <>
      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={onAdd} />
      ))}
    </>
  );
};

export default ProductList;