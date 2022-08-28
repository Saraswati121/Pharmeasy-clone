import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { ProductsReducer } from "./Products/reducer";
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/cartReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
