import React from "react";
import { Products } from "../Component/Products/Products";
import { Routes, Route } from "react-router-dom";
import { Cart } from "../Component/Cart/Cart";
import { Home } from './../Component/Home/Home';
import IPChakra from "../Component/IndivisualProduct/IPChakra";
import {OTP} from "../Component/LoginOTP/OTP"
import {OtpBox} from "../Component/LoginOTP/OtpBox"

import { Payment } from "../Component/Payment/Payment";
import HKCharkra from "../Component/healthcare/HKCharkra";
import {Offer} from "../Component/Offer/Offer";
import Navbar from "../Component/Home/Navbar";


export const AllRoutes = () => {
  return (
    <div>
      {/* Add routes here only. */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/single" element={<IPChakra/> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/OtpBox" element={<OtpBox />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/healthcare" element={<HKCharkra />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </div>
  );
};
