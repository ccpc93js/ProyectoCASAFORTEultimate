
import './OrderScreen.css'
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  
  const orderPay = useSelector((state) =>state.orderPay);
  const {
    loading: loadingPay, 
    error: errorPay,
    success: successPay
  } = orderPay; 

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
const dispatch = useDispatch();
useEffect(()=>{

  const addPayPalScript = async () => {
    const { data } = await Axios.get('/api/config/paypal');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };

    document.body.appendChild(script);
  };
  if(!order || 
    successPay || 
    successDeliver ||
    (order && order._id !== orderId)){
    dispatch({type: ORDER_PAY_RESET})
    dispatch({ type: ORDER_DELIVER_RESET });

    dispatch(detailsOrder(orderId));
  }else{
    if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }
}, [dispatch, orderId, sdkReady, order, successPay, successDeliver]);

const successPaymentHandler = (paymentResult) =>{
  dispatch(payOrder(order, paymentResult))
}

const deliverHandler = () => {
  dispatch(deliverOrder(order._id));
};

const convertirAmoneda = (valor, moneda, formatoLenguaje = undefined) =>{
  return Intl.NumberFormat(formatoLenguaje, {style: 'currency', currency: moneda}).format(valor);
}

const cambiarAdolares = (valorPesos) =>{
  let pesos = (valorPesos * 1)

  let total= (pesos / 3851.01)
  total = total.toFixed(2)
  return total
}



// const enDolares= cambiarAdolares(order.totalPrice)
// console.log(enDolares)


  return loading ? (
    <div className="loading-div">
       <LoadingBox/>
    </div>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="orderScreen-container">
      <h3>Pedido: {order._id}</h3>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <strong>Envio</strong>
                <h3>
                  <strong>Nombre:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Direccion: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </h3>
                { userInfo.isAdmin ? (order.isDelivered ?(
                  <MessageBox variant="success">
                   <h4> Entregado el {order.deliveredAt} </h4>
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No entregado</MessageBox>
                )):""}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Pago</strong>
                <h3>
                  <strong>Metodo:</strong> {order.paymentMethod}
                </h3>
                {userInfo.isAdmin ? ( order.isPaid ?(
                  <MessageBox variant="success">
                   <h4> Pagado el {order.paidAt} </h4>
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No Pagado</MessageBox>
                )):""}
                    {order.isPaid && userInfo && !userInfo.isAdmin ? (
                  <MessageBox variant="success">
                    Compra exitosa, gracias por su compra! <br/> el proveedor se comunicara con usted para la entrega.
                 {/* aqui va modal compra succes */}
                  </MessageBox>
                ) : (
                  // <MessageBox variant="danger">No Pagado</MessageBox>
                  ""
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Articulos</strong>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.producto}>
                      <div className="row">
                        <div>
                          <img
                            src={item.imagen}
                            alt={item.info}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-20">
                          <Link to={`/product/${item.producto}`}>
                            {item.info}
                          </Link>
                        </div>

                        <div>
                        {item.qty} x ${convertirAmoneda(item.precio, "COP")} = ${convertirAmoneda(item.qty * item.precio, "COP")}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h3>Sumatoria Pedido</h3>
              </li>
              <li>
                <div className="row">
                  <div>Articulos</div>
                  <div>${convertirAmoneda(order.itemsPrice.toFixed(2),'COP')}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  <div>${convertirAmoneda(order.shippingPrice.toFixed(2),'COP')}</div>
                </div>
              </li>
              {/* <li>
                <div className="row">
                  <div>Iva</div>
                  <div>${convertirAmoneda(order.taxPrice.toFixed(2),'COP')}</div>
                </div>
              </li> */}
              <li>
                <div className="row">
                  <div>
                    <strong>Total Pedido</strong>
                  </div>
                  <div>
                    <strong>${convertirAmoneda(order.totalPrice.toFixed(2),'COP')}</strong>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total en dolares</strong>
                  </div>
                  <div>
                    <strong>{ convertirAmoneda(order.totalinDolars,'USD')}</strong>
                  </div>
                   {!order.isPaid ? <div>para pagar con paypal se debe cambiar el total a dolares</div>:""}
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
   
                    <div>
                    {errorPay && (
                      <MessageBox variant="danger">{errorPay}</MessageBox>
                    )}
                    {loadingPay && <LoadingBox></LoadingBox>}
                  <PayPalButton className="payPalBotton"
                    amount={order.totalinDolars.toFixed(2)}
                    onSuccess={successPaymentHandler}
                  ></PayPalButton>
                  </div>
                  
                  )}
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                     {loading && 
                     <div className="loading-div">
                       <LoadingBox></LoadingBox>
                       </div>
                      } 
                      {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                </li>
              )}
                </li>
              )}
              { userInfo.isAdmin && order.isPaid && !order.isDelivered ? (
                 <button
                    type="button"
                    className="button block"
                    onClick={deliverHandler}
                  >
                    Pedido entregado
                  </button>):""
                }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}

