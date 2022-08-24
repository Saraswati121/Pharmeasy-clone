import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./productcard.module.css";

export const ProductCard = () => {
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    const discountPrice = 270.5 - 216.4;
    const discountPercent = (discountPrice / 270.5) * 100;
    setDiscount(discountPercent);
  }, []);

  return (
    <div className={styles.productCardParent}>
      <div className={styles.imgDiv}>
        <img
          src="https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1654078168.jpg"
          alt="product_img"
        />
      </div>
      <p>Calcimax Forte Plus Strip Of 30 Tablets</p>
      <div className={styles.discountBox}>
        <p className={styles.cutoffPrice}>
          MRP <span style={{ textDecoration: "line-through" }}>₹270.5</span>
        </p>
        <div className={styles.discountBadge}>{discount}% OFF</div>
      </div>
      <p className={styles.newPrice}>₹216.4</p>
    </div>
  );
};
