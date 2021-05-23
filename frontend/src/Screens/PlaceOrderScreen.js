import React, { useEffect } from 'react'
import './PlaceOrderScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../component/CheckoutSteps'
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { cambiarAdolares } from '../actions/productActions';

export default function PlaceOrderScreen(props) {
    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment')
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    const convertirAmoneda = (valor, moneda, formatoLenguaje = undefined) =>{
        return Intl.NumberFormat(formatoLenguaje, {style: 'currency', currency: moneda}).format(valor);
    }


    const toPrice = (num) =>  Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.precio, 0));
    cart.shippingPrice = toPrice(0) /*cart.itemsPrice > 100000? toPrice(0) : toPrice(10000)*/;
    // cart.taxPrice = toPrice(0.19 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    cart.totalinDolars = cambiarAdolares(cart.totalPrice)
    
    

    const dispatch = useDispatch()

    const placeOrderHandler = () =>{
      dispatch(createOrder({...cart, orderItems: cart.cartItems}));
    };
    useEffect(()=>{
      if(success){
        props.history.push(`/order/${order._id}`);
        dispatch({type: ORDER_CREATE_RESET});
      }
    }, [dispatch, order, props.history, success])


    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2 ">
                    <ul>
                        <li>
                            <div className="card card-body ">
                                <h2><strong>Envio</strong> </h2>
                               <h3>
                                    <strong>Nombre:</strong>{cart.shippingAddress.fullName}<br/>
                                    <strong>Direccion:</strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                                    {cart.shippingAddress.country}
                               </h3>

                            </div>
                        </li>
                        <li>
                            <div className="card card-body ">
                                <h2><strong>Pago</strong> </h2>
                               <h3>
                                    <strong>Metodo:</strong>{cart.paymentMethod}
       
                               </h3>

                            </div>
                        </li>
                        <li>
                            <div className="card card-body ">
                                <h2><strong>Pedido</strong> </h2>
                                <ul>
                            {
                                cart.cartItems.map(item =>
                                    <li key={item.producto}>
                                    <div className="row-items ">
                                        <div className="img-items">
                                        <img src={item.imagen} alt="producto" className="small"/>
                                        </div>
                                        
                                        <div className="min-20">
                                            <Link to={"/producto/" + item.producto} >
                                            {item.info}
                                            </Link>
                        
                                        </div>
                                       
                                        <div className="cart-price">
                                            {item.qty} x ${convertirAmoneda(item.precio, "COP")} = ${convertirAmoneda(item.qty * item.precio, "COP")}
                                        </div>
                                     

                                    </div>
                                    </li>)
                      
                            }
                        </ul>

                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col-1">
                <div className="card card-body">
                   <ul>
                     <li>
                       <h1>Sumatoria Pedido</h1>
                     </li>
                     <li>
                       <div className="row">
                         <div>Articulos</div>
                         <div>${convertirAmoneda(cart.itemsPrice.toFixed(2),'COP')}</div>
                       </div>
                     </li>
                     <li>
                       <div className="row">
                         <div>Envio</div>
                         <div>${convertirAmoneda(cart.shippingPrice.toFixed(2),'COP')}</div>
                       </div>
                     </li>
                     {/* <li>
                       <div className="row">
                         <div>Iva</div>
                         <div>${convertirAmoneda(cart.taxPrice.toFixed(2),'COP')}</div>
                       </div>
                     </li> */}
                     <li>
                       <div className="row">
                         <div>
                           <strong>Total Pedido</strong>
                         </div>
                         <div>
                           <strong>${convertirAmoneda(cart.totalPrice.toFixed(2),'COP')}</strong>
                         </div>
                       </div>
                     </li>
                     <li>
                       <button
                         type="button"
                         onClick={placeOrderHandler}
                         className=" block button"
                         disabled={cart.cartItems.length === 0}
                       >
                         Realizar Pedido
                       </button>
                     </li>
                     {loading && 
                     <div className="loading-div">
                       <LoadingBox></LoadingBox>
                       </div>
                      }
                     {error && <MessageBox variant="danger">{error}</MessageBox>}
                   </ul>
                 </div>
                </div>

            </div>
        </div>
    )
}
