import { ADDTOCART, REMOVEFROMCART } from "./action";

const initState = {
  cart: [],
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
      return state;
    }
    default: {
      return state;
    }
  }
};
