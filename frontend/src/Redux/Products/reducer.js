import { productActions } from "./action"


const initState = {
    isLoading: true,
    products: [],
    individualProduct: null,
    isError: false,
}

export const ProductsReducer = (state = initState, action) => {

    switch (action.type) {

        case productActions.GET_PRODUCT_LOADING: {
            return (
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case productActions.GET_PRODUCT_SUCCESS: {
            return (
                {
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    isError: false,
                }
            )
        }
        case productActions.GET_PRODUCT_ERROR: {
            return (
                {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            )
        }
        case productActions.GET_INDIVIDUALPRODUCT_LOADING: {
            return (
                {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            )
        }
        case productActions.GET_INDIVIDUALPRODUCT_SUCCESS: {
            return (
                {
                    ...state,
                    isLoading: false,
                    individualProduct: action.payload,
                    isError: false,
                }
            )
        }
        case productActions.GET_INDIVIDUALPRODUCT_ERROR: {
            return (
                {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            )
        }
        default:
            return state;
    }
}