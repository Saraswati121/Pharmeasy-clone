import React from "react";
import { Products } from "../Component/Products/Products";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Component/Cart/Cart";
import { Home } from './../Component/Home/Home';

export const AllRoutes = () => {
  return (
    <div>
      {/* Add routes here only. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
