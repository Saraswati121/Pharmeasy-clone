import { ADDTOCART, CARTPRICE, REMOVEFROMCART } from "./action";

const initState = {
  cart: [],
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
