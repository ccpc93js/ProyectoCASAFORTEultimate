
import Axios from 'axios';



import {
  CART_ADD_ITEM, CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
//   CART_ADD_ITEM_FAIL,
} from '../constants/cartConstants';

export const addToCart = (productId,qty) => async(dispatch,getState)=>{
    const {data} = await Axios.get(`/api/productos/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            info: data.info,
            imagen: data.imagen,
            precio: data.precio,
            enOferta:data.enOferta,
            precioDeOferta:data.precioDeOferta,
            descuento:data.descuento,
            enStock: data.enStock,
            producto: data._id,
            qty,
        },
        
    });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
};


export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

 export const saveShippingAddress = (data) =>(dispatch)=> {
   dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
   localStorage.setItem('shippingAddress', JSON.stringify(data))

 }

 export const savePaymentMethod = (data) => (dispatch) =>{
  dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
}
