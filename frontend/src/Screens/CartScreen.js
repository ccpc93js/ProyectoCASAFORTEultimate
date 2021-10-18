import React, { useEffect } from 'react'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
// import MessageBox from '../component/MessageBox';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import formatCurrency, { convertirAmoneda } from '../actions/productActions';
import Fade from 'react-reveal/Fade';
import { $porcentajeEmpresa, $porcentajePersona } from '../components/Productos';


// import data from '../data.json'



export default function CartScreen(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo} = userSignin;
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
			        	<div className="return-to-shop">
                            <Link to="/all" ><button className="button return-to-shop"> Continuar comprando</button></Link>
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

                        <Fade left cascade>
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
                                    <div className="cart-img">
                                    <img src={item.imagen} alt="producto" className="small-cart"/>
                                    </div>

                                    <div className="cart-info">

                                    
                                    <div className="cart-descripcion-link">
                                        <Link to={`/producto/${item.producto}/${item.info.replace(/ /g,"-")}`} >
                                       {item.info}
                                     </Link>
                    
                                    </div>
                                    <div className="cart-price">
                                    <p>

                                    {
                                        userInfo ?
                                        (item.enOferta === false)?(
                                        
                                            <p>
                                            <b> Precio:  </b>
                                              {formatCurrency(userInfo.tipoClient === "Empresa"? item.precio + (item.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"? item.precio + (item.precio * $porcentajePersona): item.precio )}
                                            </p>
                                        ):(
                                          <div className="producto-en-oferta_precio">
                                            <b> Precio:  </b>

                                           <p className="p1"> {formatCurrency(userInfo.tipoClient === "Empresa"? item.precio + (item.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"? item.precio + (item.precio * $porcentajePersona): item.precio )}</p>
                                            {/* <br></br> */}
                                            <b> oferta:  </b>
                                        
                                            <p className="p2"> {formatCurrency(userInfo.tipoClient === "Empresa"? item.precioDeOferta + (item.precioDeOferta * $porcentajeEmpresa):userInfo.tipoClient === "Persona"? item.precioDeOferta + (item.precioDeOferta * $porcentajePersona): item.precioDeOferta )}</p>
                                        
                                          </div>

                                        )

                                        : (
                                            (item.enOferta ===false)?(
                                              <p>{formatCurrency(item.precio + (item.precio * $porcentajePersona))}</p>
                                            ):(
                                              <div className="producto-en-oferta_precio">
                                               <p className="p1"> {formatCurrency( item.precio + (item.precio * $porcentajePersona))}</p>
                                                {/* <br></br> */}
                                                <p className="p2"> {formatCurrency(item.precioDeOferta + (item.precioDeOferta * $porcentajePersona))}</p>
                            
                                              </div>
                                              
                                              )
                                          )
                                    }                       
                                    </p>
                                    </div>

                                    <div className="actions">

                                    <div className="cart-cantidad">
                                    <p><b> Cantidad:  </b>
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.producto, Number(e.target.value)))}>
                                        {[...Array(item.enStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        </p>  
                                    </div>
                                    
                                    <div className="cart-button-remove" aria-label="remover">
                                    <IconButton  className=" " onClick={() => removeFromCartHandler(item.producto)} >
                                    <DeleteForeverIcon className="cart-button-remove"/>

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
                              <b> Subtotal:  {
                              
                                                    cartItems.reduce((a,c) => a + c.qty, 0)} articulos: {

                                                        userInfo?
                                                    
                                                            formatCurrency(cartItems.reduce((a,c)=> a + (userInfo.tipoClient === "Empresa"
                                                            ? c.precio + (c.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                                            ? c.precio + (c.precio * $porcentajePersona): c.precio  - (userInfo.tipoClient === "Empresa"
                                                            ? c.precio + (c.precio * $porcentajeEmpresa):userInfo.tipoClient === "Persona"
                                                            ? c.precio + (c.precio * $porcentajePersona): c.precio  * (c.descuento/100)||0)) * c.qty, 0))
                                                            
                                                        :

                                                        formatCurrency(cartItems.reduce((a,c)=> a + (c.precio + (c.precio * $porcentajePersona) - (c.precio + (c.precio * $porcentajePersona) *(c.descuento/100)||0))* c.qty, 0))

                                                            
                                                            
                                                            } </b> 
                            </h2>
                        </li>
                        <li>
                       <div className="button-center">
                       <button type="button" onClick={checkoutHandler} className=" button"  disabled ={cartItems.length === 0}>
                                Ir a pagar
                            </button>
                       </div>
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

