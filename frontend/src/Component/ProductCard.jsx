import React from "react";
import styles from "../styles/productcard.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.productCardParent}>
      <div className={styles.imgDiv}>
      <img src="https://cdn01.pharmeasy.in/dam/products_otc/A75976/liveasy-essentials-handwash-pump-250-ml-2-1653312958.jpg" alt=""/>
      </div>
      <p>Calcimax Forte Plus Strip Of 30 Tablets</p>
      <p className={styles.cutoffPrice}>MRP <span style={{textDecoration:"line-through"}}>₹270.5</span></p>
      <p className={styles.newPrice}>₹216.4</p>
    </div>
  );
};
