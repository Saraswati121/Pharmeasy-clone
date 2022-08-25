import React from "react";
import styles from "./singlecartcard.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SingleCartCard = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.singleCartWrapper}>
      <div className={styles.singleCartImgDiv}>
        <img
          src="https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1654078168.jpg?dim=60x0&dpr=1&q=100"
          alt="product_img"
        />
      </div>
      <div className={styles.singleCartInfo}>
        <div className={styles.singleCartTitle}>
          <p>Calcimax Forte Plus Strip of 30 Tablets</p>
          <div className={styles.deleteIcon}>
            <RiDeleteBin6Line fontSize="20px" color="#4f585e" />
          </div>
        </div>
        <p className={styles.companyName}>By CALCIMAX FORTE PLUS</p>
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
              <p style={{ textDecoration: "line-through" }}>₹541.80*</p>
              <p style={{ color: "#f98b8d" }}>20% OFF</p>
            </div>
            <p>₹432.80*</p>
          </div>
        </div>
        <p className={styles.deliveryTime}>
          Delivery by <strong>Tomorrow, before 10:00 pm</strong>
        </p>
      </div>
    </div>
  );
};
