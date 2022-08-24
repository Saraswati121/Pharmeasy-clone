import React from "react";
import styles from "./products.module.css";
import { ProductCard } from "../Product Card/ProductCard";
// import { Select } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

export const Products = () => {
  return (
    <>
      <div className={styles.breadCrumb}>
        <Breadcrumb
          spacing="8px"
          separator={<BiChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
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
              {/* <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
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
    </>
  );
};
