import React, { useMemo } from "react";

const CartSummary = ({ cart }) => {
  // ✅ useMemo → expensive calculation
  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <>
      <h3>Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </>
  );
};

export default CartSummary;