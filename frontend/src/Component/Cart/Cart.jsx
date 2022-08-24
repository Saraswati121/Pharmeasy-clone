import React from "react";
import styles from "./cart.module.css";

export const Cart = () => {
  return (
    <>
    <div className={styles.cartWrapper}>
      <div className={styles.cartTopBox}>
        <div>
          <h1>Cart</h1>
          <div className={styles.cartSearchBox}>
            <div>
              <span>
                {" "}
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/8bfde66a.svg"
                  alt=""
                />{" "}
                Flat 15% Off
              </span>
              <span>
                {" "}
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/adb9b646.svg"
                  alt=""
                />{" "}
                1 Lakh+ Products
              </span>
              <span>
                {" "}
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/9279f530.svg"
                  alt=""
                />{" "}
                Easy Returns
              </span>
            </div>
            <h2>Search for Medicines / Healthcare Products</h2>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <h1>Your Cart is Empty</h1>
          </div>
          <div>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div style={{width:"100%",background:"#ececec",height:"1px"}}></div>
    </>
  );
};
