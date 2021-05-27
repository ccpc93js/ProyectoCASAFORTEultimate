import React from 'react';
import './DrawerRight.css'
import { IconButton} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import CartSideBar from "./CartSideBar";
import ClearIcon from '@material-ui/icons/Clear';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useSelector } from 'react-redux';


export const handleCartSideOpen = () =>{
  const CarritoModal = document.querySelector(".Carrito-Modal-container",".Carrito");
  const Carrito = document.querySelector(".Carrito");
  CarritoModal.style.visibility = "visible"
  CarritoModal.style.opacity = "1";
  Carrito.style.visibility = "visible"
  Carrito.style.opacity = "1";
  Carrito.style.transform = "translateX(0)"
  CarritoModal.classList.toggle("Carrito-Modal-close")
  

}
export const handleCartSideClose = () =>{
   const CarritoModal = document.querySelector(".Carrito-Modal-container");
   const Carrito = document.querySelector(".Carrito");
   CarritoModal.style.visibility = "hidden"
   CarritoModal.style.opacity = "0";
   Carrito.style.visibility = "hidden"
   Carrito.style.opacity = "0";
   Carrito.style.transform = "translateX(100%)"

}


window.addEventListener("click", (e) =>{
  const CarritoModal = document.querySelector(".Carrito-Modal-container");

  if(e.target == CarritoModal ){
    handleCartSideClose()
  }
})



 const DrawerRight = (props) => {
  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;

  const body = (
    <div className=''>
      <div className="ClearIcon-CartSide-container">

      <IconButton
       className="ClearIcon-CartSide"
       onClick={props.handleCartSideClose}
       color="inherit"
       >
         <i   className="ClearIcon-CartSide">
        <ClearIcon/>

         </i>
      </IconButton>
         </div>
        <div className="CartSide-title">
         <h2>CARRIT0</h2>
         <Link to="/cart" aria-label="carrito"
                onClick={props.handleCartSideClose}
            >
                <i className="cart-icon ">
                 <ShoppingCartIcon/>
                {cartItems.length > 0 && (
                    <span className="badge ">{cartItems.length}</span>
                    )}
                </i>

            </Link>

        </div>

    
      <CartSideBar/>
              
    </div>
  );


  return (
    <div className="Carrito-Modal-container">

    <div    
    className="Carrito shadow-box"
    >

      <div className="Body-Carrito">
        {body}
      </div>
    </div>
  </div>
  );
}

export default DrawerRight