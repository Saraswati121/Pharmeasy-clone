import React, { useState } from "react";
import styles from "./products.module.css";
import { ProductCard } from "../Product Card/ProductCard";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const subCategoryFilters = [
  "Men Care",
  "Appliances",
  "Women Care",
  "Oral Care",
  "Male Grooming",
];
const priceFilters = ["Below 99", "100-199", "200-299", "300-399", "400-499"];

export const Products = () => {
  const [sortVal, setSortVal] = useState("");

  const handleSubCategoryChange = (e) => {
    console.log(e.target.value);
  };

  const handlePriceChange = (e) => {
    console.log(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log(e.target.value);
    setSortVal(e.target.value);
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
          {subCategoryFilters.map((el, index) => {
            return (
              <div key={index} className={styles.radioInputBox}>
                {el}
                <input
                  type="radio"
                  onChange={handleSubCategoryChange}
                  name="sub-Category"
                  value={el}
                />
              </div>
            );
          })}
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
          {priceFilters.map((el, index) => {
            return (
              <div key={index} className={styles.radioInputBox}>
                {el}
                <input
                  type="checkbox"
                  onChange={handlePriceChange}
                  value={el}
                  name="price-filter"
                />
              </div>
            );
          })}

          <h4>View More</h4>
        </div>
      </div>
      <div className={styles.rightChild}>
        <div>
          <h1>Personal Care</h1>
          <div>
            <span>Sort By :</span>
            <FormControl sx={{ minWidth: 260 }} size="small">
              <Select
                value={sortVal}
                onChange={handleSortChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Popularity</MenuItem>
                <MenuItem value="l2h">Price low to high</MenuItem>
                <MenuItem value="h2l">Price low to high</MenuItem>
                <MenuItem value="dis">Discount</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
