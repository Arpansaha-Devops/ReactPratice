import React, { memo } from "react";

// ✅ memo → prevent unnecessary re-render
const ProductItem = ({ product, onAdd }) => {
  console.log("Rendering:", product.name);

  return (
    <div>
      <span>
        {product.name} - ₹{product.price}
      </span>
      <button onClick={() => onAdd(product)}>Add</button>
    </div>
  );
};

export default memo(ProductItem);