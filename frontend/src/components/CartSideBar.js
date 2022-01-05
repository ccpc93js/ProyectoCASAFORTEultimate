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
import { $porcentajeEmpresa, $porcentajePersona } from './Productos';
import Descuento from './Descuento';
import CartItemSideBar from './CartItemSideBar';
import PrecioClient from './PrecioClient';

// import data from '../data.json'



export default function CartSideBar(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)

    // const productId = props.match.params.id;
    // const qty = props.location.search? Number(props.location.search.split('=')[1]):1;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
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
            {cartItems.length === 0 ?

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
                                                <CartItemSideBar
                                                    key={item.producto}
                                                    item={item}
                                                    userInfo={userInfo}
                                                    removeFromCartHandler={removeFromCartHandler}
                                                />
                                            )

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
                                                    cartItems.reduce((a, c) => a + c.qty, 0)} articulos: {

                                                    userInfo ?

                                                        formatCurrency(cartItems.reduce((a, c) => a + (PrecioClient(c.precio, userInfo.tipoClient) - (PrecioClient(c.precio, userInfo.tipoClient) * (c.descuento / 100) || 0)) * c.qty, 0))
                                                        :

                                                        formatCurrency(cartItems.reduce((a, c) => a + (c.precio + (c.precio * $porcentajePersona) - (c.precio + (c.precio * $porcentajePersona) * (c.descuento / 100) || 0)) * c.qty, 0))
                                                }
                                            </b>
                                        </h2>
                                    </li>
                                    <li>
                                        <Link to="/cart">
                                            <div className="cartSide-button-center">
                                                <button
                                                    type="button"
                                                    className=" button "
                                                    disabled={cartItems.length === 0}
                                                    onClick={handleCartSideClose}
                                                >
                                                    VER CARRITO
                                                </button>

                                            </div>
                                        </Link>

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

