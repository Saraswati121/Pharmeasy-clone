import { legacy_createStore, combineReducers, applyMiddleware } from "redux"
import { ProductsReducer } from "./Products/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    products: ProductsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))