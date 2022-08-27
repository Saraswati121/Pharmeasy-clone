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
        url: "http://localhost:8080/product",
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

export const getIndividualProducts = (dispatch, el) => {
    // console.log(id)

    dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_LOADING });
    dispatch({ type: productActions.GET_INDIVIDUALPRODUCT_SUCCESS, payload: el })

    // axios.get(`http://localhost:8080/product/${id}`).then(({ data }) =>)).catch((err)=>console.log(err))
}