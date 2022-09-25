import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIndividualProducts } from "../../../Redux/Products/action";
import styles from "./productcard.module.css";

export const ProductCard = (el) => {
  // const {individualProduct} = useSelector();
  // const dispatch = useDispatch();
  const [discount, setDiscount] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {

    getIndividualProducts(dispatch, el);
    navigate("/products/single")

  };

  useEffect(() => {
    // calculate by a calling a common function
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
