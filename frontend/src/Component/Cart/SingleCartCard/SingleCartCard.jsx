import React, { useEffect, useState } from "react";
import styles from "./singlecartcard.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { cartPrice, removeFromCart } from "../../../Redux/Cart/action";

export const SingleCartCard = (el) => {
  const [qty, setQty] = useState(1);
  const [discount, setDiscount] = useState("");
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    // Use proper naming here like cartTotalPrice , originalPrice 
    let cartTotal = qty * el.newPrice;
    let cartDiscount = qty * el.originalPrice;
    cartPrice(dispatch, cartTotal, cartDiscount);
    //Can use validations here ( For new negative values , use to show error popups)
    const discountPrice = el.originalPrice - el.newPrice;
    const discountPercent = (discountPrice / el.originalPrice) * 100;
    setDiscount(discountPercent.toFixed(1));
  }, [qty]);

  const handleDelete = () => {
    removeFromCart(cart, dispatch, el._id);
  };
  const handleChange = (e) => {
    setQty(e.target.value);
    let cartTotal = qty * el.newPrice;
    let cartDiscount = qty * el.originalPrice;
    cartPrice(dispatch, cartTotal, cartDiscount);
  };

  // Always try to separate out child components from parent components as much as possible .If they can reusable put in util files and import them
  return (
    <div className={styles.singleCartWrapper}>
      <div className={styles.singleCartImgDiv}>
        <img src={el.img1} alt="product_img" />
      </div>
      <div className={styles.singleCartInfo}>
        <div className={styles.singleCartTitle}>
          <p>{el.desc}</p>
          <div className={styles.deleteIcon}>
            <RiDeleteBin6Line
              fontSize="20px"
              color="#4f585e"
              onClick={handleDelete}
            />
          </div>
        </div>
        <p className={styles.companyName}>By {el.company}</p>
        <div className={styles.singleCartQty}>
          <div>
            {/* Can we made a separate component */}
            <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
              <Select
                value={qty}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>Qty 1</MenuItem>
                <MenuItem value={2}>Qty 2</MenuItem>
                <MenuItem value={3}>Qty 3</MenuItem>
                <MenuItem value={4}>Qty 4</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <div>
              <p style={{ textDecoration: "line-through" }}>
                {/* Dont do calculations inside DOM. */}
                ₹{el.originalPrice.toFixed(2) * qty}*
              </p>
              <p style={{ color: "#f98b8d" }}>{discount}% OFF</p>
            </div>
            <p>₹{el.newPrice.toFixed(2) * qty}*</p>
          </div>
        </div>
        <p className={styles.deliveryTime}>
          Delivery by <strong>Tomorrow, before 10:00 pm</strong>
        </p>
      </div>
    </div>
  );
};
