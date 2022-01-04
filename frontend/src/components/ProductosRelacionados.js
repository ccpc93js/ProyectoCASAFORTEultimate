import React from 'react'
import formatCurrency from '../actions/productActions';
import LoadingBox from './LoadingBox';
import { $porcentajeEmpresa, $porcentajePersona } from './Productos';

export default function ProductosRelacionados({ producto, userInfo, loadingP }) {
    return (

            <li className="">

                {
                    loadingP ? (
                        <LoadingBox />
                    ) : (
                        <>
                            {
                                (producto.enOferta === true) ?
                                    (
                                        <div className="producto-en-oferta">
                                            <p className="porcentaje">{producto.descuento}%</p>
                                            <p className="DCTO">DCTO</p>
                                        </div>
                                    )
                                    :
                                    (
                                        ""
                                    )
                            }
                            <a href={`/producto/${producto._id}/${producto.info.replace(/ /g, "-")}`}>
                                <div className="continerPR__productos-relacionados__img">
                                    <img src={producto.imagen} alt={producto.info} />
                                </div>
                                <div className="continerPR__details">
                                    <p className="continerPR__details__description__info">{producto.info}</p>
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

                            </a>
                        </>
                    )}

            </li>


    )
}
