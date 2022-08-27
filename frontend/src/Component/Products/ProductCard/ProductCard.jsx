import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./productcard.module.css";

export const ProductCard = (el) => {
  // const {individualProduct} = useSelector();
  // const dispatch = useDispatch();
  const [discount, setDiscount] = useState("");

  const handleClick = () => {
    // getIndividualProducts(dispatch,el._id);
  };

  useEffect(() => {
    const discountPrice = el.originalPrice - el.newPrice;
    const discountPercent = (discountPrice / el.originalPrice) * 100;
    setDiscount(discountPercent.toFixed(1));
  }, []);

  return (
    <div className={styles.productCardParent} onClick={handleClick}>
      <div className={styles.imgDiv}>
        <img src={el.img1} alt="product_img" />
      </div>
      <p>{el.desc}</p>
      <div className={styles.discountBox}>
        <p className={styles.cutoffPrice}>
          MRP{" "}
          <span style={{ textDecoration: "line-through" }}>
            ₹{el.originalPrice}
          </span>
        </p>
        <div className={styles.discountBadge}>{discount}% OFF</div>
      </div>
      <p className={styles.newPrice}>₹{el.newPrice}</p>
    </div>
  );
};
