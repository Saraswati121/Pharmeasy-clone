/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import styles from "./cart.module.css";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { SingleCartCard } from "./SingleCartCard/SingleCartCard";
import { useEffect } from "react";

const cart = [
  {
    _id: "6307d0c17537afb07aae7480",
    id: 1,
    desc: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
    company: "DETTOL",
    img1: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1654166172.jpg?dim=320x320&dpr=1&q=100",
    img2: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-3-1654166156.jpg",
    img3: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.1-1652772850.jpg",
    img4: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.4-1652772681.jpg?dim=100x0&dpr=1&q=100",
    img5: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.6-1652771120.jpg?dim=100x0&dpr=1&q=100",
    ratings: 1159,
    newPrice: 180,
    originalPrice: 194,
    offer: 7,
    about:
      "Dettol is a brand of cleaning supplies and sanitiser and sterile, presented in 1932 and the producer claimed by the Anglo-Dutch organization Reckitt Benckiser. In Germany, it is sold under the name Sagrotan. Preceding 2002, some Dettol items were marked Detox. Dettol Antiseptic Liquid is a comprehensive use item utilized for security against germs that has been suggested by clinical experts and trusted by moms. Dettol Antiseptic Liquid eliminates germs from skin, shields from contaminations brought about by cuts and scratches and can likewise be utilized as a family sanitiser on home surfaces and in clothing.",
    category_id: "6307c147aca0f4291e43ac6e",
    __v: 0,
  },
];

export const Cart = () => {
  const [cutPrice, setCutPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        setTotalPrice(totalPrice + cart[i].newPrice);
        setCutPrice(cutPrice + cart[i].originalPrice);
      }
    }
  }, []);
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
            <div className={styles.deliveryAddressBox}>
              Add Delivery Address
            </div>
            <div className={styles.orderSummary}>
              <p>Order Summary</p>
              <div>
                <p>Cart Value </p>
                <div>
                  <span
                    style={{ textDecoration: "line-through", color: "#8897a2" }}
                  >
                    ₹{cutPrice}
                  </span>
                  <strong style={{ color: "#4f585e", textDecoration: "none" }}>
                    ₹{totalPrice}
                  </strong>
                </div>
              </div>
              <div>
                <p>Amount to be paid</p>
                <strong>₹{totalPrice}</strong>
              </div>
            </div>
            <div className={styles.savingsBox}>
              <p>
                Total Savings of <strong>₹{cutPrice - totalPrice}</strong> on
                this order{" "}
              </p>
              <p>
                <span>MRP Discount 19.99%</span>
                <span>₹{cutPrice - totalPrice}</span>
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
