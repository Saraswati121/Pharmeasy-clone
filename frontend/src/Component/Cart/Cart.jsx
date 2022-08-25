/* eslint-disable no-lone-blocks */
import React from "react";
import styles from "./cart.module.css";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { SingleCartCard } from "../SingleCartCard/SingleCartCard";

export const Cart = () => {
  return (
    <>
      <div className={styles.cartWithItems}>
        <div className={styles.singleCartItem}>
          <div>
            <h1>1 Item in Cart</h1>
            <p>Prices are indicative</p>
          </div>
          <div>
            <SingleCartCard />
            <SingleCartCard />
            <SingleCartCard />
          </div>
        </div>
        <div className={styles.cartBilling}>
          <div className={styles.applyCoupon}>
            <div>
              <img
                src="https://assets.pharmeasy.in/web-assets/dist/90a09c2f.svg"
                alt="percent_img"
              />{" "}
              Apply Coupon
            </div>
            <FiChevronRight
              fontSize="20px"
              style={{ marginRight: "5%", fontWeight: "700" }}
            />
          </div>
          <div className={styles.deliveryAddressBox}>Add Delivery Address</div>
          <div className={styles.orderSummary}>
            <p>Order Summary</p>
            <div>
              <p>Cart Value </p>
              <span style={{ textDecoration: "line-through" , color:"#8897a2"}}>
                ₹1316.00<strong style={{color:"#4f585e"}}>₹1176.80</strong>
              </span>
            </div>
            <div>
              <p>Amount to be paid</p>
              <strong>₹1176.80</strong>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          background: "#ececec",
          height: "1px",
        }}
      ></div>
      <div className={styles.cartInfoBox}>
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1&q=100"
            alt=""
          />
          <h2>1 Lakh+ Products</h2>
          <p>
            We maintain strict quality controls on all our partner retailers, so
            that you always get standard quality products.
          </p>
        </div>
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1&q=100"
            alt=""
          />
          <h2>Secure Payment</h2>
          <p>100% secure and trusted payment protection</p>
        </div>
        <div>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1&q=100"
            alt=""
          />
          <h2>Easy Return</h2>
          <p>
            We have a new and dynamic return window policy for medicines and
            healthcare items. Refer FAQs section for more details.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          background: "#ececec",
          height: "1px",
        }}
      ></div>
      <div className={styles.appStoreBox}>
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/34a16ae8.jpg"
          alt=""
        />
        <div>
          <p>Download the App for Free</p>
          <div>
            <div>
              {" "}
              <FaGooglePlay
                fontSize="24px"
                style={{ marginRight: "5%" }}
              />{" "}
              Google Play{" "}
            </div>
            <div>
              {" "}
              <AiFillApple fontSize="28px" style={{ marginRight: "5%" }} /> App
              Store{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className={styles.cartWrapper}>
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
      </div> */
}
