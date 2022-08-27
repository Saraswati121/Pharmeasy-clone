import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./productcard.module.css";

// const el = {
//   desc: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
//   company: "DETTOL",
//   img1: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1654166172.jpg?dim=320x320&dpr=1&q=100",
//   img2: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-3-1654166156.jpg",
//   img3: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.1-1652772850.jpg",
//   img4: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.4-1652772681.jpg?dim=100x0&dpr=1&q=100",
//   img5: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.6-1652771120.jpg?dim=100x0&dpr=1&q=100",
//   ratings: 1159,
//   newPrice: 180,
//   originalPrice: 194,
//   offer: 7,
//   about:
//     "Dettol is a brand of cleaning supplies and sanitiser and sterile, presented in 1932 and the producer claimed by the Anglo-Dutch organization Reckitt Benckiser. In Germany, it is sold under the name Sagrotan. Preceding 2002, some Dettol items were marked Detox. Dettol Antiseptic Liquid is a comprehensive use item utilized for security against germs that has been suggested by clinical experts and trusted by moms. Dettol Antiseptic Liquid eliminates germs from skin, shields from contaminations brought about by cuts and scratches and can likewise be utilized as a family sanitiser on home surfaces and in clothing.",
// };

export const ProductCard = (el) => {
  // const {individualProduct} = useSelector();
  // const dispatch = useDispatch();
  const [discount, setDiscount] = useState("");

  const handleClick = () => {
    // getIndividualProducts(dispatch,el);
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
