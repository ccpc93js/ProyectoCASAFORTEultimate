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







 const DrawerRight = (props) => {
  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;

  const body = (
    <div className='modalSearch'>
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
    <div    
    className="Carrito shadow-box"
    >

      <div className="Body-Carrito">
        {body}
      </div>
    </div>
  );
}

export default DrawerRight