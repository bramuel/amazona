import { productListReducer, productDetailReducer } from "./reducers/productReducers";
import {applyMiddleware, combineReducers, compose, createStore, reactStore} from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import Cookie from 'js-cookie'
import { userSigninReducer } from "./reducers/userReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart:{cartItems}, userSignin:{userInfo}}
const reducer = combineReducers({
    productList: productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userSignin:userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;