// import axios from "axios";

export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const CARTPRICE = "CARTPRICE";

export const addToCart = (dispatch,el) => {
  dispatch({type:ADDTOCART,payload:el})
};

export const removeFromCart = (cart, dispatch, id) => {
  const newCart = cart.filter((el, index) => {
    return el._id !== id;
  });
  dispatch({
    type: REMOVEFROMCART,
    payload: newCart,
  });
};

export const cartPrice = (dispatch, total, discount) => {
  dispatch({
    type: CARTPRICE,
    payload: {
      total,
      discount,
    },
  });
};
