import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/action";

const subCategoryFilters = [
  "Covid Test Kits",
  "Disinfectants",
  "Home Hygiene Essentials",
  "Masks",
  "Hand Sanitizers",
];
const priceFilters = ["Below 99", "100-199", "200-299", "300-399", "400-499"];

export const Products = () => {
  const [sortVal, setSortVal] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [productData, setProductData] = useState([]);
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  useEffect(() => {
    const sortArray = () => {
      if (sortVal === "l2h") {
        const newData = products.sort((a, b) => a.newPrice - b.newPrice);
        setProductData([...newData]);
      } else if (sortVal === "h2l") {
        const newData = products.sort((a, b) => b.newPrice - a.newPrice);
        setProductData([...newData]);
      }
    };
    sortArray();
  }, [sortVal]);

  useEffect(() => {
    const handlePriceChange = () => {
      const str = priceFilter.split("-");
      const lower = str[0];
      const upper = str[1];
      console.log(lower, upper);
      if (!upper) {
        const newData = products.filter((el, index) => {
          return el.newPrice > 0 && el.newPrice < 100;
        });
        setProductData(newData);
      } else {
        const newData = products.filter((el, index) => {
          return el.newPrice >= lower && el.newPrice <= upper;
        });
        setProductData(newData);
      }
    };
    handlePriceChange();
  }, [priceFilter]);

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.leftChild}>
        <h1>Filter</h1>
        <div className={styles.categoryDiv}>
          <p>Category</p>
          <div className={styles.radioInputBox}>
            Covid Essentials
            <input type="radio" defaultChecked />
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
                <input type="radio" name="sub-Category" value={el} />
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
                  type="radio"
                  onChange={(e) => setPriceFilter(e.target.value)}
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
          <h1>Covid Essentials</h1>
          <div>
            <span>Sort By :</span>
            <FormControl sx={{ minWidth: 260 }} size="small">
              <Select
                value={sortVal}
                onChange={(e) => setSortVal(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Popularity</MenuItem>
                <MenuItem value="l2h">Price low to high</MenuItem>
                <MenuItem value="h2l">Price high to low</MenuItem>
                <MenuItem value="dis">Discount</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          {productData.length > 0
            ? productData.map((el, index) => {
                return <ProductCard key={index} {...el} />;
              })
            : products.map((el, index) => {
                return <ProductCard key={index} {...el} />;
              })}
        </div>
      </div>
    </div>
  );
};
