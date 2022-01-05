import React, { useEffect } from 'react'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
// import MessageBox from '../component/MessageBox';
import formatCurrency from '../actions/productActions';
import Fade from 'react-reveal/Fade';
import { $porcentajeEmpresa, $porcentajePersona } from '../components/Productos';
import PrecioClient from '../components/PrecioClient';
import CartItem from './CartItem';


// import data from '../data.json'



export default function CartScreen(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirec=shipping')
    }
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div className="cartContainer">
            {/* <h1>Carrito</h1> */}
            {cartItems.length === 0 ?

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
                                                <CartItem 
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
                                            <b> Subtotal:  {

                                                cartItems.reduce((a, c) => a + c.qty, 0)} articulos: {

                                                    userInfo ?

                                                        formatCurrency(cartItems.reduce((a, c) => a + (PrecioClient(c.precio, userInfo.tipoClient) - (PrecioClient(c.precio, userInfo.tipoClient) * (c.descuento / 100) || 0)) * c.qty, 0))
                                                        :
                                                        formatCurrency(cartItems.reduce((a, c) => a + (c.precio + (c.precio * $porcentajePersona) - (c.precio + (c.precio * $porcentajePersona) * (c.descuento / 100) || 0)) * c.qty, 0))
                                                } </b>
                                        </h2>
                                    </li>
                                    <li>
                                        <div className="button-center">
                                            <button type="button" onClick={checkoutHandler} className=" button" disabled={cartItems.length === 0}>
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

