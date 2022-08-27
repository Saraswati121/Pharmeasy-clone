import { ADDTOCART, CARTPRICE, REMOVEFROMCART } from "./action";

const initState = {
  cart: [
    {
      _id: "6307d0c17537afb07aae7480",
      id: 1,
      desc: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
      company: "DETTOL",
      img1: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1654166172.jpg?dim=320x320&dpr=1&q=100",
      img2: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-3-1654166156.jpg",
      img3: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.1-1652772850.jpg",
      img4: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.4-1652772681.jpg?dim=100x0&dpr=1&q=100",
      img5: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-6.6-1652771120.jpg?dim=100x0&dpr=1&q=100",
      ratings: 1159,
      newPrice: 180,
      originalPrice: 194,
      offer: 7,
      about:
        "Dettol is a brand of cleaning supplies and sanitiser and sterile, presented in 1932 and the producer claimed by the Anglo-Dutch organization Reckitt Benckiser. In Germany, it is sold under the name Sagrotan. Preceding 2002, some Dettol items were marked Detox. Dettol Antiseptic Liquid is a comprehensive use item utilized for security against germs that has been suggested by clinical experts and trusted by moms. Dettol Antiseptic Liquid eliminates germs from skin, shields from contaminations brought about by cuts and scratches and can likewise be utilized as a family sanitiser on home surfaces and in clothing.",
      category_id: "6307c147aca0f4291e43ac6e",
      __v: 0,
    },
  ],
  subTotal: 0,
  discountTotal: 0,
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADDTOCART: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case REMOVEFROMCART: {
      return {
        ...state,
        cart: [...payload],
      };
    }
    case CARTPRICE: {
      return {
        ...state,
        subtotal: state.subTotal + payload.total,
        discountTotal: payload.discount,
      };
    }
    default: {
      return state;
    }
  }
};
