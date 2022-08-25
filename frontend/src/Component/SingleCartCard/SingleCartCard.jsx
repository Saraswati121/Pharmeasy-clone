import React from "react";
import styles from "./singlecartcard.module.css";

export const SingleCartCard = () => {
  return (
    <div className={styles.singleCartWrapper}>
      <div className={styles.singleCartImgDiv}>
        <img
          src="https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1654078748.jpg?dim=60x0&dpr=1&q=100"
          alt=""
        />
      </div>
      <div className={styles.singleCartInfo}>
        <div className={styles.singleCartTitle}></div>
        <p></p>
        <div className={styles.singleCartQty}></div>
        <p></p>
      </div>
    </div>
  );
};
