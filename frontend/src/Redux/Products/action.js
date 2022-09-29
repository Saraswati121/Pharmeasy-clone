import axios from "axios";

// action types
export const productActions = {
  GET_PRODUCT_LOADING: "GET_PRODUCT_LOADING",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_ERROR: "GET_PRODUCT_ERROR",

  GET_INDIVIDUALPRODUCT_LOADING: "GET_INDIVIDUALPRODUCT_LOADING",
  GET_INDIVIDUALPRODUCT_SUCCESS: "GET_INDIVIDUALPRODUCT_SUCCESS",
  GET_INDIVIDUALPRODUCT_ERROR: "GET_INDIVIDUALPRODUCT_ERROR",
};

export const getProducts = (dispatch) => {
  dispatch({ type: productActions.GET_PRODUCT_LOADING });
  axios
    .get("https://pharmaeasy.herokuapp.com/products")
    .then((res) => dispatch({ type: productActions.GET_PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};

// Individual Product

export const getIndividualProducts = (dispatch, el) => {
    dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_LOADING });
    dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_SUCCESS, payload: el })
}
