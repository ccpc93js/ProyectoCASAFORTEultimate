import React, { useEffect } from 'react'
import './PlaceOrderScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../component/CheckoutSteps'
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import formatCurrency, { cambiarAdolares } from '../actions/productActions';
import ClearIcon from '@material-ui/icons/Clear';


window.addEventListener("click", (e) =>{
  const MCE_C = document.querySelector(".Modal-compraExitosa-container");
  const MCE = document.querySelector(".Modal-compraExitosa")


  if(e.target == MCE_C ){
    MCE_C.classList.toggle("ModalCExitosa-Container-Close")
    MCE.classList.toggle("ModalCExitosa-Close")  
  }
})
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
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * (userInfo.tipoClient === "Empresa"? c.precio + (c.precio * 0.20):userInfo.tipoClient === "Persona"? c.precio + (c.precio * 0.30): c.precio - (userInfo.tipoClient === "Empresa"? c.precio + (c.precio * 0.20):userInfo.tipoClient === "Persona"? c.precio + (c.precio * 0.30): c.precio * (c.descuento/100)||0)), 0));
    // cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.precio, 0));
    cart.shippingPrice = toPrice(0) /*cart.itemsPrice > 100000? toPrice(0) : toPrice(10000)*/;
    // cart.taxPrice = toPrice(0.19 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
    cart.totalinDolars = cambiarAdolares(cart.totalPrice)
    

    const handlecompraContraEntregaOpen = () =>{
      const MCE_C = document.querySelector(".Modal-compraExitosa-container")
      const MCE = document.querySelector(".Modal-compraExitosa")
    
      MCE_C.classList.toggle("ModalCExitosa-Container-Close")
      MCE.classList.toggle("ModalCExitosa-Close")
    
    }
    
    const handlecompraContraEntregaClose = () =>{
      const MCE_C = document.querySelector(".Modal-compraExitosa-container")
      const MCE = document.querySelector(".Modal-compraExitosa")
    
      MCE_C.classList.toggle("ModalCExitosa-Container-Close")
      MCE.classList.toggle("ModalCExitosa-Close")
    
    }
    
    window.addEventListener("click", (e) =>{
      const MCE_C = document.querySelector(".Modal-compraExitosa-container");
      const MCE = document.querySelector(".Modal-compraExitosa")
    
    
      if(e.target == MCE_C ){
        MCE_C.classList.toggle("ModalCExitosa-Container-Close")
        MCE.classList.toggle("ModalCExitosa-Close")  
      }
    })
    const compraContraEntrega = () =>{
      return (
        <div className="Modal-compraExitosa-container ">
  <div className="Modal-compraExitosa ">
  <button
   className="ClearIcon Modal-compraExitosa__ClearIcon"
   onClick={handlecompraContraEntregaClose}
   color="inherit"
   >
     <i   className="ClearIcon">
    <ClearIcon/>
                      
     </i>
  </button>
  <div className="Modal-compraExitosa__img">
  <img  className="casaforte" src='https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png' alt="casaforte"/>
  </div>
  <p className="Modal-compraExitosa__frase">
  Compra contra entrega exitosa, gracias por su compra! <br/> el proveedor se comunicara con usted para la entrega.
   </p> 
  </div>
                      
  </div>)
    }

    const dispatch = useDispatch()

    const placeOrderHandler = () =>{
      dispatch(createOrder({...cart, orderItems: cart.cartItems}));
      if  (cart.paymentMethod === "Contra entrega"){
        compraContraEntrega()
      }
    
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
                                            {item.qty} x {item.enOferta === true?formatCurrency(userInfo.tipoClient === "Empresa"? item.precioDeOferta + (item.precioDeOferta * 0.20):userInfo.tipoClient === "Persona"? item.precioDeOferta + (item.precioDeOferta * 0.30): item.precioDeOferta):formatCurrency(userInfo.tipoClient === "Empresa"? item.precio + (item.precio * 0.20):userInfo.tipoClient === "Persona"? item.precio + (item.precio * 0.30): item.precio)} = {item.enOferta === true?formatCurrency(item.qty * userInfo.tipoClient === "Empresa"? item.precioDeOferta + (item.precioDeOferta * 0.20):userInfo.tipoClient === "Persona"? item.precioDeOferta + (item.precioDeOferta * 0.30): item.precioDeOferta):formatCurrency(item.qty * userInfo.tipoClient === "Empresa"? item.precio + (item.precio * 0.20):userInfo.tipoClient === "Persona"? item.precio + (item.precio * 0.30): item.precio)}
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
