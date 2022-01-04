import React from 'react'
import Fade from 'react-reveal/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import formatCurrency from '../actions/productActions';
import { $porcentajeEmpresa, $porcentajePersona } from './Productos';
import Descuento from './Descuento';


export default function Producto({ producto, handleAddCart, handleCartSideOpen, userInfo }) {



    return (
        <>
            {

                <Fade left cascade={true}>
                    <div key={producto._id} className="product-card ">
                        <div className="product-image">
                            {
                                (producto.enOferta === true) ?
                                    (
                                        < Descuento producto={producto}/>
                                    )
                                    :
                                    ("")
                            }
                            <a

                                href={`/producto/${producto._id}/${producto.info.replace(/ /g, "-")}`} className="product-image__body ">
                                <img className="product-image__img imgnormalP " alt={producto.info} src={producto.imagen} />

                            </a>
                            {/* {userInfo? */}

                            <div
                                aria-label="agregar a carrito"
                                className="addCart"
                                onClick={
                                    () => {
                                        handleCartSideOpen()
                                        handleAddCart(producto._id)

                                    }
                                }>
                                <i><ShoppingCartIcon /></i>
                            </div>
                            {/* : ""} */}
                        </div>
                        <div className="product-card__info">
                            <a href={`/producto/${producto._id}/${producto.info.replace(/ /g, "-")}`}><p>{producto.info}</p></a>
                        </div>
                        <div className="product-card-body">
                            {/* <strong>CÓDIGO: </strong>{producto.codigo}<br/>
                                <strong>UNIDAD: </strong>{producto.unidad}<br/> */}
                            {/* <strong>PRECIO: </strong>${convertirAmoneda(producto.precio , "COP")}<br/> */}

                            {
                                userInfo ?

                                    (producto.enOferta === false) ? (
                                        <p>{formatCurrency(userInfo.tipoClient === "Empresa" ? producto.precio + (producto.precio * $porcentajeEmpresa) : userInfo.tipoClient === "Persona" ? producto.precio + (producto.precio * $porcentajePersona) : producto.precio)}</p>
                                    ) : (
                                        <div className="producto-en-oferta_precio">
                                            <p className="p1"> {formatCurrency(userInfo.tipoClient === "Empresa" ? producto.precio + (producto.precio * $porcentajeEmpresa) : userInfo.tipoClient === "Persona" ? producto.precio + (producto.precio * $porcentajePersona) : producto.precio)}</p>
                                            {/* <br></br> */}
                                            <p className="p2"> {formatCurrency(userInfo.tipoClient === "Empresa" ? producto.precio + (producto.precio * $porcentajeEmpresa) : userInfo.tipoClient === "Persona" ? producto.precioDeOferta + (producto.precioDeOferta * $porcentajePersona) : producto.precioDeOferta)}</p>

                                        </div>

                                    )
                                    : (
                                        (producto.enOferta === false) ? (
                                            <p>{formatCurrency(producto.precio + (producto.precio * $porcentajePersona))}</p>
                                        ) : (
                                            <div className="producto-en-oferta_precio">
                                                <p className="p1"> {formatCurrency(producto.precio + (producto.precio * $porcentajePersona))}</p>
                                                {/* <br></br> */}
                                                <p className="p2"> {formatCurrency(producto.precioDeOferta + (producto.precioDeOferta * $porcentajePersona))}</p>

                                            </div>

                                        )
                                    )
                            }
                        </div>
                    </div>
                </Fade>
            }
        </>
    )
}
