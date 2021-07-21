import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
// import MessageBox from '../component/MessageBox';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import formatCurrency from '../actions/productActions';
import { handleCartSideClose, handleCartSideOpen } from './DrawerRight'
import Fade from 'react-reveal/Fade';

// import data from '../data.json'



export default function CartSideBar(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)

    // const productId = props.match.params.id;
    // const qty = props.location.search? Number(props.location.search.split('=')[1]):1;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo} = userSignin;

    const cart = useSelector(state =>state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () =>{
        props.history.push('/signin?redirec=shipping')
    }  


    // useEffect(() =>{
    //     if (productId){
    //         dispatch(addToCart(productId, qty));
    //     }
    // }, [dispatch, productId, qty]);
    return (
        <div className="cartSideContainer">
            {/* <h1>Carrito</h1> */}
            {cartItems.length === 0?

               ( 
               <div className="cartSide-empty">
                   <div className="image-cart-empty ">
                    <img className="imgnormalcart" src="/img/Icons/carrito.png" alt="shopping-cart-icon" />
                   </div>
                    <p className="cartSide-empty-p">No hay productos en el carrito.</p>
			    	<div className="empty-cart-text">
                        Antes de proceder al pago, debe agregar algunos productos a su carrito de compras.
                     <br></br> 
                        Encontrará muchos productos interesantes en nuestra tienda.
                    </div>
			        	<div className="cartSide-return-to-shop">
                            {/* <Link to="#" > */}
                            <button 
                             onClick={handleCartSideClose}
                             className="button return-to-shop"
                             > 
                             Continuar comprando
                             </button>
                             {/* </Link> */}
                        </div>
                </div>
            //     <MessageBox>
            //     </MessageBox>
               )
                :
                (
                    <div>
                    <div className="rowCart-container top">

                    <div className="col-2Cart">

                        <Fade right cascade>
                    <ul>

                        {
                            cartItems.map(item =>
                                <li key={item.producto} className="rowCart ">
                                    {
                                         (item.enOferta === true)?
                                        ( 
                                           <div  className="producto-en-oferta">
                                             <p className="porcentaje">{item.descuento}%</p>
                                             <p className="DCTO">DCTO</p>
                                           </div>
                                         )
                                         :
                                         (
                                             ""  
                                         )
                                    }                                        
                                    <div className="cartSide-img">
                                    <img src={item.imagen} alt="producto" className="small-cart"/>
                                    </div>

                                    <div className="cartSide-info">

                                    
                                    <div className="cartSide-descripcion-link">
                                        <Link to={`/producto/${item.producto}/${item.info.replace(/ /g,"-")}`} >
                                       {item.info}
                                     </Link>
                    
                                    </div>
                                    <div className="cartSide-price">
                                    <p>

                                    {
                                        
                                        userInfo?

                                        (item.enOferta === false)?(
                                        
                                            <span>
                                            <b> Precio:  </b>
                                              {formatCurrency(userInfo.tipoClient === "Empresa"? item.precio + (item.precio * 0.20):userInfo.tipoClient === "Persona"? item.precio + (item.precio * 0.30): item.precio )}
                                            </span>
                                        ):(
                                          <div className="producto-en-oferta_precio">
                                            <b> Precio:  </b>

                                           <p className="p1"> {formatCurrency(userInfo.tipoClient === "Empresa"? item.precio + (item.precio * 0.20):userInfo.tipoClient === "Persona"? item.precio + (item.precio * 0.30): item.precio )}</p>
                                            {/* <br></br> */}
                                            <b> oferta:  </b>
                                        
                                            <p className="p2"> {formatCurrency(userInfo.tipoClient === "Empresa"? item.precioDeOferta + (item.precioDeOferta * 0.20):userInfo.tipoClient === "Persona"? item.precioDeOferta + (item.precioDeOferta * 0.30): item.precioDeOferta )}</p>
                                        
                                          </div>

                                        )

                                        : (
                                            (item.enOferta ===false)?(
                                              <p>{formatCurrency(item.precio + (item.precio * 0.30))}</p>
                                            ):(
                                              <div className="producto-en-oferta_precio">
                                               <p className="p1"> {formatCurrency( item.precio + (item.precio * 0.30))}</p>
                                                {/* <br></br> */}
                                                <p className="p2"> {formatCurrency(item.precioDeOferta + (item.precioDeOferta * 0.30))}</p>
                            
                                              </div>
                                              
                                              )
                                          )
                                    }  
                                    </p>
                                    </div>

                                    <div className="cartSide-actions">

                                    <div className="cartSide-cantidad">
                                    <p><b> Cantidad:  </b>
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.producto, Number(e.target.value)))}>
                                        {[...Array(item.enStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        </p>  
                                    </div>
                                    
                                    <div className="cartSide-button-remove" aria-label="remover">
                                    <IconButton  className="" onClick={() => removeFromCartHandler(item.producto)} >
                                    <DeleteForeverIcon className="cartSide-button-remove"/>

                                    </IconButton>

                                    </div>
                                    </div>
                                    </div>

        
                                </li>)
                  
                        }
                    </ul>
                        </Fade>

            </div>
            </div>
        
            <div className="col-1Cart ">
                <div className="cardCart card-bodyCart ">
                    <ul>
                        <li className="subtotal">
                            <h2 >
                            <b> 
                                Subtotal: {
                                   cartItems.reduce((a,c) => a + c.qty, 0)} articulos: {

                                    userInfo?
                                
                                        formatCurrency(cartItems.reduce((a,c)=> a + (userInfo.tipoClient === "Empresa"
                                        ? c.precio + (c.precio * 0.20):userInfo.tipoClient === "Persona"
                                        ? c.precio + (c.precio * 0.30): c.precio  - (userInfo.tipoClient === "Empresa"
                                        ? c.precio + (c.precio * 0.20):userInfo.tipoClient === "Persona"
                                        ? c.precio + (c.precio * 0.30): c.precio  * (c.descuento/100)||0)) * c.qty, 0))
                                        
                                    :

                                        formatCurrency(cartItems.reduce((a,c)=> a + (c.precio + (c.precio * 0.30) - (c.precio + (c.precio * 0.30) *(c.descuento/100)||0))* c.qty, 0))

                                
                                }
                            </b> 
                            </h2>
                        </li>
                        <li>
                        <a href="/cart" >
                        <div className="cartSide-button-center">
                        <Link to="/cart">
                       <button 
                        type="button"
                        className=" button "  
                        disabled ={cartItems.length === 0}
                        onClick={handleCartSideClose}
                        >
                               VER CARRITO
                        </button>
                        
                        </Link>
                       </div>

                        </a>
                       {/* <div className="cartSide-button-center">
                       <button type="button" onClick={checkoutHandler} className=" button "  disabled ={cartItems.length === 0}>
                                IR A PAGAR
                            </button>
                       </div> */}
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

