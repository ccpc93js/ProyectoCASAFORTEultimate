import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import formatCurrency from '../actions/productActions'
import Descuento from '../components/Descuento'
import PrecioClient from '../components/PrecioClient'
import { $porcentajePersona } from '../components/Productos'

import { IconButton } from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function CartItemSideBar({item, userInfo, removeFromCartHandler}) {
    const dispatch = useDispatch();

    return (
        <li key={item.producto} className="rowCart ">
        {
             (item.enOferta === true)?
            ( 
                < Descuento producto={item}/>

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
        <span>

        {
            
            userInfo?

            (item.enOferta === false)?(
            
                <span>
                <b> Precio:  </b>
                  {formatCurrency(PrecioClient(item.precio, userInfo.tipoClient))}
                </span>
            ):(
              <div className="producto-en-oferta_precio">
                <b> Precio:  </b>

               <p className="p1"> {formatCurrency(PrecioClient(item.precio, userInfo.tipoClient))}</p>
                {/* <br></br> */}
                <b> oferta:  </b>
            
                <p className="p2"> {formatCurrency(PrecioClient(item.precioDeOferta, userInfo.tipoClient))}</p>
            
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
        </span>
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


    </li>
    )
}
