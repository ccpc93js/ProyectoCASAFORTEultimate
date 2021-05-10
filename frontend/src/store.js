import { createStore,compose, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer } from './reducers/orderReducers';
// import data from './data'; se utilizo redux
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productUpdateReducer } from "./reducers/productReducers";
import { userCreateReducer, userDeleteReducer, userDetailsReducer, userInfoDeleteReducer, userListReducer, userListRegisteredReducer, userRegisterInfoReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';

const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
         ? JSON.parse(localStorage.getItem('userInfo'))
         : null,
       },

    cart:{
     cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
        shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userRegisterInfo: userRegisterInfoReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userCreate: userCreateReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userListRegistered: userListRegisteredReducer,
    userDelete: userDeleteReducer,
    userInfoDelete:userInfoDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    orderSummary: orderSummaryReducer,







});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;