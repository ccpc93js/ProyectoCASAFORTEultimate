import React, { useEffect } from 'react'
import './PlaceOrderScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import formatCurrency, { cambiarAdolares } from '../actions/productActions';
import { $porcentajeEmpresa, $porcentajePersona } from '../components/Productos';

export default function PlaceOrderScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo} = userSignin;
    const cart = useSelector((state) => state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment')
    }

    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    // const convertirAmoneda = (valor, moneda, formatoLenguaje = undefined) =>{
    //     return Intl.NumberFormat(formatoLenguaje, {style: 'currency', currency: moneda}).format(valor);
    // }


    const toPrice = (num) =>  Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty 
    * (
        userInfo?
          userInfo.tipoClient === "Empresa"?
          c.precio + (c.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
          ? c.precio + (c.precio * $porcentajePersona): c.precio - (userInfo.tipoClient === "Empresa"
          ? c.precio + (c.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
          ? c.precio + (c.precio * $porcentajePersona): c.precio * (c.descuento/100)||0)
          
          :
           (c.precio+ (c.precio * $porcentajePersona)) - ((c.precio+ (c.precio * $porcentajePersona)) * (c.descuento/100)||0)
          
          ), 0)

      );
    // cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.precio, 0));
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
                                <h3 className="envioINfo">
                                  <p> {cart.shippingAddress.fullName}</p>
                                  <p> {cart.shippingAddress.address}</p>
                                  <p>{cart.shippingAddress.city}</p>
                                  <p>{cart.shippingAddress.postalCode}</p>
                                  <p>{cart.shippingAddress.country}</p>
                                </h3>

                            </div>
                        </li>
                        <li>
                            <div className="card card-body ">
                                <h2><strong>Pago</strong> </h2>
                               <h3>
                                    <strong>Metodo: </strong>{cart.paymentMethod}
       
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
                                            <Link to={`/producto/${item.producto}/${item.info.replace(/ /g,"-")}`} >
                                            {item.info}
                                            </Link>
                        
                                        </div>
                                       
                                        <div className="cart-price">
                                            {item.qty} x {
                                            userInfo?
                                              item.enOferta === true?
                                                formatCurrency(userInfo.tipoClient === "Empresa"
                                                ? item.precioDeOferta + (item.precioDeOferta * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                                ? item.precioDeOferta + (item.precioDeOferta * $porcentajePersona): item.precioDeOferta)
                                                :formatCurrency(userInfo.tipoClient === "Empresa"
                                                ? item.precio + (item.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                                ? item.precio + (item.precio * $porcentajePersona): item.precio)
                                            :
                                                item.enOferta === true?
                                                formatCurrency(item.precioDeOferta + (item.precioDeOferta * $porcentajePersona))
                                                :formatCurrency( item.precio + (item.precio * $porcentajePersona))
                                            }
                                                 = 
                                            { 

                                            userInfo?
                                              item.enOferta === true?
                                              formatCurrency(item.qty * userInfo.tipoClient === "Empresa"
                                              ? item.precioDeOferta + (item.precioDeOferta * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                              ? item.precioDeOferta + (item.precioDeOferta * $porcentajePersona): item.precioDeOferta)
                                              :formatCurrency(item.qty * userInfo.tipoClient === "Empresa"
                                              ? item.precio + (item.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                              ? item.precio + (item.precio * $porcentajePersona): item.precio)
                                            :
                                              item.enOferta === true?
                                              formatCurrency(item.precioDeOferta + (item.precioDeOferta * $porcentajePersona))
                                              :formatCurrency( item.precio + (item.precio * $porcentajePersona))

                                            }
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
                         <div>{formatCurrency(cart.itemsPrice)}</div>
                       </div>
                     </li>
                     <li>
                       <div className="row">
                         <div>Envio</div>
                         <div>{formatCurrency(cart.shippingPrice)}</div>
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
                           <strong>{formatCurrency(cart.totalPrice)}</strong>
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
