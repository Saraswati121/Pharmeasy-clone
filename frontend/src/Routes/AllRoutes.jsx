import React from "react";
import { Products } from "../pages/Products";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <div>
      {/* Add routes here only. */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
