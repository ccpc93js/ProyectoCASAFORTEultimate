import React, { useState } from 'react';
import './PaymentMethodScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }


  
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div className="PaymethodContainer">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Metodo de pago</h1>
        </div>
        <div>
          <div className="check-content"> 
            <input className="cheked"
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal"><img className="img-paymethod" src="https://res.cloudinary.com/casaforte/image/upload/v1622647553/Icon/paypal_rxixjr.png" alt="" /></label>
          </div>
        </div>
        <div>
          {/* <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div> */}
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="contraEntrega"
              value="Contra entrega"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="contraEntrega" style={{fontWeight:800}}>{"    Contra entrega    "}</label>
          </div>
        </div>
        <div>
          <label />
          <button className="button" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}