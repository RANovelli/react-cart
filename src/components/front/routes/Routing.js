import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../products/Products";
import Signup from "../signup/Signup";
import Cart from "../cart/Cart";
const Routing = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routing;
