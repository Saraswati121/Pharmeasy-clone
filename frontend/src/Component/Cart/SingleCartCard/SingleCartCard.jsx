import React, { useEffect, useState } from "react";
import styles from "./singlecartcard.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SingleCartCard = (el) => {
  const [age, setAge] = useState("");
  const [discount, setDiscount] = useState("");
  useEffect(() => {
    const discountPrice = el.originalPrice - el.newPrice;
    const discountPercent = (discountPrice / el.originalPrice) * 100;
    setDiscount(discountPercent.toFixed(1));
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.singleCartWrapper}>
      <div className={styles.singleCartImgDiv}>
        <img src={el.img1} alt="product_img" />
      </div>
      <div className={styles.singleCartInfo}>
        <div className={styles.singleCartTitle}>
          <p>{el.desc}</p>
          <div className={styles.deleteIcon}>
            <RiDeleteBin6Line fontSize="20px" color="#4f585e" />
          </div>
        </div>
        <p className={styles.companyName}>By {el.company}</p>
        <div className={styles.singleCartQty}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Qty 1</MenuItem>
                <MenuItem value={10}>Qty 2</MenuItem>
                <MenuItem value={20}>Qty 3</MenuItem>
                <MenuItem value={30}>Qty 4</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <div>
              <p style={{ textDecoration: "line-through" }}>
                ₹{el.originalPrice}*
              </p>
              <p style={{ color: "#f98b8d" }}>{discount}% OFF</p>
            </div>
            <p>₹{el.newPrice}*</p>
          </div>
        </div>
        <p className={styles.deliveryTime}>
          Delivery by <strong>Tomorrow, before 10:00 pm</strong>
        </p>
      </div>
    </div>
  );
};
