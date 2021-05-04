import React, { useState } from 'react';
import './ShippingAddressScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  // const userAddressMap = useSelector((state) => state.userAddressMap);
  // const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // const newLat = addressMap ? addressMap.lat : lat;
    // const newLng = addressMap ? addressMap.lng : lng;
    // if (addressMap) {
    //   setLat(addressMap.lat);
    //   setLng(addressMap.lng);
    // }
    // let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     'You did not set your location on map. Continue?'
    //   );
    // }
    // if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
          country,
          // lat: newLat,
          // lng: newLng,
        })
      );
      props.history.push('/payment');
    // }
  };
  const chooseOnMap = () => {
    dispatch(
      saveShippingAddress({
        fullName, 
        address,
        city,
        postalCode,
        country,
        lat,
        lng,
      })
    );
    props.history.push('/map');
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <form className="formulario" onSubmit={submitHandler}>
        <div>
          <h1>Direccion de envio</h1>
        </div>
        <div className="contenedor">

        <div class="input-contenedor">
          <label htmlFor="fullName">Nombre</label>
          <input
            type="text2"
            id="fullName"
            placeholder="Nombre Completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div class="input-contenedor">
          <label htmlFor="address">Direccion</label>
          <input
            type="text2"
            id="address"
            placeholder="Direccion"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div class="input-contenedor">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text2"
            id="city"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div class="input-contenedor">
          <label htmlFor="postalCode">Codigo postal</label>
          <input
            type="text2"
            id="postalCode"
            placeholder="Codigo postal "
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div class="input-contenedor">
          <label htmlFor="country">Pais</label>
          <input
            type="text2"
            id="country"
            placeholder="Pais"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        {/* <div class="input-contenedor">
          <label htmlFor="chooseOnMap">Location</label>
          <button type="button" onClick={chooseOnMap}>
            Choose On Map
          </button>
        </div> */}
        <div className="button-central">
          <label />
          <button className="button" type="submit">
            Continuar
          </button>
        </div>
      </div>

      </form>
    </div>
  );
}