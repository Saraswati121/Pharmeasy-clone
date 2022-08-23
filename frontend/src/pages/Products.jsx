import React from "react";
import styles from "../styles/products.module.css";

export const Products = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={styles.leftChild}>
        <h1>Filter</h1>
        <div className={styles.categoryDiv}>
          <p>Category</p>
          <div className={styles.radioInputBox}>
            Personal Care
            <input type="radio" />
          </div>
        </div>
      </div>
      <div className={styles.rightChild}>
        <h1>Personal Care</h1>
      </div>
    </div>
  );
};
