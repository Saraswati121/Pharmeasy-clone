import axios from "axios"

// action types
export const productActions = {
    GET_PRODUCT_LOADING: 'GET_PRODUCT_LOADING',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR: 'GET_PRODUCT_ERROR',

    GET_INDIVIDUALPRODUCT_LOADING: 'GET_INDIVIDUALPRODUCT_LOADING',
    GET_INDIVIDUALPRODUCT_SUCCESS: 'GET_INDIVIDUALPRODUCT_SUCCESS',
    GET_INDIVIDUALPRODUCT_ERROR: 'GET_INDIVIDUALPRODUCT_ERROR',
}



export const getProducts = () => (dispatch) => {

    dispatch({ type: productActions.GET_PRODUCT_LOADING });

    axios({
        url: "https://localhost:8080/products",
        method: 'GET',
        params: {}
    }).then((res) => {
        console.log('res:', res)
        dispatch({ type: productActions.GET_PRODUCT_SUCCESS, payload: res.data });
    }).catch((err) => {
        dispatch({ type: productActions.GET_PRODUCT_ERROR })
    })
}


// Individual Product

export const getIndividualProducts = ({ id }) => (dispatch, getState) => {

    dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_LOADING });

    axios({
        url: `https://localhost:8080/products/${id}`,
        method: 'GET',
        params: {}
    }).then((res) => {
        console.log('res:', res)
        dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_SUCCESS, payload: res.data });
    }).catch((err) => {
        dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_ERROR })
    })
}