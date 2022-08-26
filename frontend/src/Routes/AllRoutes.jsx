import React from "react";
import { Products } from "../Component/Products/Products";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Component/Cart/Cart";
import { Home } from './../Component/Home/Home';
import {OTP} from "../Component/LoginOTP/OTP"
import {OtpBox} from "../Component/LoginOTP/OtpBox"
import {Offer} from "../Component/Offer/Offr"

export const AllRoutes = () => {
  return (
    <div>
      {/* Add routes here only. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/OtpBox" element={<OtpBox />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
    </div>
  );
};
