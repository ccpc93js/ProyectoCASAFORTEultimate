import React, { useEffect } from 'react'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
// import MessageBox from '../component/MessageBox';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { convertirAmoneda } from '../actions/productActions';

// import data from '../data.json'



export default function CartScreen(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1])
    :1;
    const cart = useSelector(state =>state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{
        props.history.push('/signin?redirec=shipping')
    }  
    useEffect(() =>{
        if (productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div className="cartContainer">
            {/* <h1>Carrito</h1> */}
            {cartItems.length === 0?

               ( 
               <div className="cart-empty">
                   <div className="image-cart-empty ">
                    <img className="imgnormalcart" src="/img/Icons/carrito.png" alt="shopping-cart-icon" />
                   </div>
                    <p className="cart-empty-p">No hay productos en el carrito.</p>
			    	<div className="empty-cart-text">
                        Antes de proceder al pago, debe agregar algunos productos a su carrito de compras.
                     <br></br> 
                        Encontrará muchos productos interesantes en nuestra tienda.
                    </div>
			        	<p className="return-to-shop">
                            <Link to="/nuevos" className="button return-to-shop">Continuar Comprando</Link>
                        </p>
                </div>
            //     <MessageBox>
            //     </MessageBox>
               )
                :
                (
                    <div>
                    <div className="rowCart top">

                    <div className="col-2Cart">

                    <ul>
                        {
                            cartItems.map(item =>
                                <li key={item.producto}>
                                <div className="row ">
                                    <div className="">
                                    <img src={item.imagen} alt="producto" className="small"/>
                                    </div>
                                    
                                    <div className="min-30">
                                        <Link to={"/producto/" + item.producto} >
                                        {item.info}
                                     </Link>
                    
                                    </div>
                                    <div>
                                        <b> Cantidad:  </b>
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.producto, Number(e.target.value)))}>
                                        {[...Array(item.enStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )}
                                        </select>
                                       
                                    </div>
                                    
                                    <div className="cart-price">
                                    <b> Precio:  </b>

                                    ${convertirAmoneda(item.precio,'COP')}
                                    </div>
                                    <div>
                                    <IconButton  className="" onClick={() => removeFromCartHandler(item.producto)} >
                                    <DeleteForeverIcon className="button-remove"/>

                                    </IconButton>

                                    </div>
        
                                </div>
                                </li>)
                  
                        }
                    </ul>

            </div>
            </div>
        
            <div className="col-1Cart ">
                <div className="cardCart card-bodyCart ">
                    <ul>
                        <li className="subtotal">
                            <h2 >
                              <b> Subtotal:  {cartItems.reduce((a,c) => a + c.qty, 0)} articulos: ${convertirAmoneda(cartItems.reduce((a,c)=> a + c.precio * c.qty, 0),'COP')} </b> 
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className=" button"  disabled ={cartItems.length === 0}>
                                Ir a pagar
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            </div>
                )
            }
        
        
        </div>
        
          )
}




// <div>
// <h1>cart screen</h1>
// <p>agregar a carrito : ProductoID: {producto._id} Qty: {qty}</p>
// </div>

