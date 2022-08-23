import React from "react";
import styles from "../styles/products.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Products = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        <div
          style={{
            background: "rgb(223,227,230)",
            height: "1px",
            width: "100%",
          }}
        ></div>
        <div className={styles.subCategoryDiv}>
          <p>Sub category</p>
          <div className={styles.radioInputBox}>
            Men Care
            <input type="radio" />
          </div>
          <div className={styles.radioInputBox}>
            Appliances
            <input type="radio" />
          </div>
          <div className={styles.radioInputBox}>
            Women Care
            <input type="radio" />
          </div>
          <div className={styles.radioInputBox}>
            Oral Care
            <input type="radio" />
          </div>
          <div className={styles.radioInputBox}>
            Male Grooming
            <input type="radio" />
          </div>
          <h4>View More</h4>
        </div>
        <div
          style={{
            background: "rgb(223,227,230)",
            height: "1px",
            width: "100%",
          }}
        ></div>
        <div className={styles.pricesFilterDiv}>
          <p>Price</p>
          <div className={styles.radioInputBox}>
            Below 99
            <input type="checkbox" />
          </div>
          <div className={styles.radioInputBox}>
            100-199
            <input type="checkbox" />
          </div>
          <div className={styles.radioInputBox}>
            200-299
            <input type="checkbox" />
          </div>
          <div className={styles.radioInputBox}>
            300-399
            <input type="checkbox" />
          </div>
          <div className={styles.radioInputBox}>
            400-499
            <input type="checkbox" />
          </div>
          <h4>View More</h4>
        </div>
      </div>
      <div className={styles.rightChild}>
        <div>
          <h1>Personal Care</h1>
          <div>
            <span>Sort By :</span>
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Popularity</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
