
import './OrderScreen.css'
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import formatCurrency from '../actions/productActions';
import ClearIcon from '@material-ui/icons/Clear';
import { $porcentajeEmpresa, $porcentajePersona } from '../components/Productos';
import PrecioClient from '../components/PrecioClient';
import OrderItem from '../components/OrderItem';

window.addEventListener("click", (e) => {
  const MCE_C = document.querySelector(".Modal-compraExitosa-container");
  const MCE = document.querySelector(".Modal-compraExitosa")


  if (e.target === MCE_C) {
    MCE_C.classList.toggle("ModalCExitosa-Container-Close")
    MCE.classList.toggle("ModalCExitosa-Close")
  }
})

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const orderPay = useSelector((state) => state.orderPay);
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
  useEffect(() => {

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
    if (!order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET });

      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
    const enviarEmail = async (name, email, order) => {
      await Axios.post("/api/emails/compraExitosa", {
        name,
        email,
        order: order._id,

      });
    }


    const cargarPuntosUsuariosPuntosYA = async (userInfo, order) => {
      try {

        const { data } = await Axios.get(`http://puntosya.azurewebsites.net/puntosya/registro_usuario_api.php?local=326&clave=pjt3anu1&cedula=${userInfo.nit}&monto=${order.totalPrice}`)
        console.log(data);
        // alert(data);

      } catch (error) {

        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        console.log(message)
      }
    }

    if (successPay && order.isPaid && userInfo && !userInfo.isAdmin) {
      cargarPuntosUsuariosPuntosYA(userInfo, order);

    }

    if (successPay && order.paymentMethod === "Contra entrega" && userInfo && !userInfo.isAdmin) {

      enviarEmail(userInfo.name, userInfo.email, order);
    }

  }, [dispatch, orderId, sdkReady, order, successPay, successDeliver, userInfo]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));

  };


  const handleCopExitosaModalClose = () => {
    const MCE_C = document.querySelector(".Modal-compraExitosa-container")
    const MCE = document.querySelector(".Modal-compraExitosa")

    MCE_C.classList.toggle("ModalCExitosa-Container-Close")
    MCE.classList.toggle("ModalCExitosa-Close")

  }

  window.addEventListener("click", (e) => {
    const MCE_C = document.querySelector(".Modal-compraExitosa-container");
    const MCE = document.querySelector(".Modal-compraExitosa")


    if (e.target === MCE_C) {
      MCE_C.classList.toggle("ModalCExitosa-Container-Close")
      MCE.classList.toggle("ModalCExitosa-Close")
    }
  })


  return loading ? (
    <div className="loading-div">
      <LoadingBox />
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
                <strong>Direccion de envio</strong>
                <h3 className="envioINfo">
                  <p> {order.shippingAddress.fullName}</p>
                  <p> {order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}</p>
                  <p>{order.shippingAddress.postalCode}</p>
                  <p>{order.shippingAddress.country}</p>
                </h3>
                {userInfo.isAdmin ? (order.isDelivered ? (
                  <MessageBox variant="success">
                    <h4> Entregado el {order.deliveredAt} </h4>
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No entregado</MessageBox>
                )) : ""}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Pago</strong>
                <h3>
                  <strong>Metodo: </strong> {order.paymentMethod}
                </h3>
                {userInfo.isAdmin ? (order.isPaid ? (
                  <MessageBox variant="success">
                    <h4> Pagado el {order.paidAt} </h4>
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">No Pagado</MessageBox>
                )) : ""}
                {(order.isPaid || order.paymentMethod === "Contra entrega") && userInfo && !userInfo.isAdmin ? (


                  <div className="Modal-compraExitosa-container ">
                    <div className="Modal-compraExitosa ">
                      <button
                        className="ClearIcon Modal-compraExitosa__ClearIcon"
                        onClick={handleCopExitosaModalClose}
                        color="inherit"
                      >
                        <i className="ClearIcon">
                          <ClearIcon />

                        </i>
                      </button>
                      <div className="Modal-compraExitosa__img">
                        <img className="casaforte" src='https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png' alt="casaforte" />
                      </div>
                      <p className="Modal-compraExitosa__frase">
                        Compra exitosa, gracias por su compra! <br /> el proveedor se comunicara con usted para la entrega.
                      </p>
                    </div>

                  </div>

                ) : (
                  ""
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Articulos</strong>
                <ul>
                  {order.orderItems.map((item) => (
                    <OrderItem item={item} userInfo={userInfo} />
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
                  <div>{formatCurrency(order.itemsPrice)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  <div>{formatCurrency(order.shippingPrice)}</div>
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
                    <strong>{formatCurrency(order.totalPrice)}</strong>
                  </div>
                </div>
              </li>
              <li>
                {
                  order.paymentMethod === "PayPal" ?
                    <div className="row">
                      <div>
                        <strong>Total en dolares</strong>
                      </div>
                      <div>
                        <strong>{formatCurrency(order.totalinDolars)}USD</strong>
                      </div>
                      {!order.isPaid ? <div>para pagar con paypal se debe cambiar el total a dolares</div> : ""}
                    </div>
                    : ""
                }

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
                      {
                        order.paymentMethod === "PayPal" ?

                          <PayPalButton className="payPalBotton"
                            // onClick={handleCopExitosaModalOpen}
                            amount={order.totalinDolars.toFixed(2)}
                            onSuccess={successPaymentHandler}
                          ></PayPalButton>
                          : ("")
                      }
                      {

                        userInfo.isAdmin && order.paymentMethod === "Contra entrega" ?
                          <button
                            type="button"
                            className="button block"
                            onClick={() => { successPaymentHandler({ id: "CONTRAENTREGA9", status: "COMPLETED" }) }}

                          >
                            Pedido contra entrega pagado
                          </button>
                          : ""
                      }
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
              {userInfo.isAdmin && order.isPaid && !order.isDelivered ? (
                <button
                  type="button"
                  className="button block"
                  onClick={deliverHandler}
                >
                  Pedido entregado
                </button>) : ""
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}

