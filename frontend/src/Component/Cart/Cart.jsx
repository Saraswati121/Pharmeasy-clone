/* eslint-disable no-lone-blocks */
import React from "react";
import styles from "./cart.module.css";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { SingleCartCard } from "./SingleCartCard/SingleCartCard";
import { useSelector } from "react-redux";

export const Cart = () => {
  let { cart, subtotal, discountTotal } = useSelector((store) => store.cart);

  if (subtotal) {
    subtotal = subtotal.toFixed(2);
    discountTotal = discountTotal.toFixed(2);
  }

  return (
    <>
      {cart.length > 0 ? (
        <div className={styles.cartWithItems}>
          <div className={styles.singleCartItem}>
            <div>
              <h1>1 Item in Cart</h1>
              <p>Prices are indicative</p>
            </div>
            <div>
              {cart.map((el, index) => {
                return <SingleCartCard key={index} {...el} />;
              })}
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
            <div className={styles.deliveryAddressBox}>Proceed to buy</div>
            <div className={styles.orderSummary}>
              <p>Order Summary</p>
              <div>
                <p>Cart Value </p>
                <div>
                  <span
                    style={{ textDecoration: "line-through", color: "#8897a2" }}
                  >
                    ₹{discountTotal}
                  </span>
                  <strong style={{ color: "#4f585e", textDecoration: "none" }}>
                    ₹{subtotal}
                  </strong>
                </div>
              </div>
              <div>
                <p>Amount to be paid</p>
                <strong>₹{subtotal}</strong>
              </div>
            </div>
            <div className={styles.savingsBox}>
              <p>
                Total Savings of <strong>₹{discountTotal - subtotal}</strong> on
                this order{" "}
              </p>
              <p>
                <span>MRP Discount 19.99%</span>
                <span>₹{discountTotal - subtotal}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
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
                <div>
                  <input
                    type="text"
                    placeholder="e.g. Ecosprin, Telma or Colgate"
                  />
                  <button>
                    <AiOutlineSearch fontSize="23px" />
                  </button>
                </div>
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
      )}
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
