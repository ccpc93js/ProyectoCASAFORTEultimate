import React from 'react'
import formatCurrency from '../actions/productActions'
import PrecioClient from './PrecioClient'
import { $porcentajePersona } from './Productos'

export default function OrderItem({item,userInfo}) {
    return (
        <li key={item.producto}>
        <div className="row">
          <div>
            <img
              src={item.imagen}
              alt={item.info}
              className="small"
            ></img>
          </div>
          <div className="min-20">
            {/* <Link to={`/producto/${item.producto}/${item.info.replace(/ /g,"-")}`}> */}
              {item.info}
            {/* </Link> */}
          </div>

          <div>
            {item.qty} x {
            userInfo?
              item.enOferta === true?
                formatCurrency(PrecioClient(item.precioDeOferta,userInfo.tipoClient))
                :formatCurrency(PrecioClient(item.precio,userInfo.tipoClient))
            :
                item.enOferta === true?
                formatCurrency(item.precioDeOferta + (item.precioDeOferta * $porcentajePersona))
                :formatCurrency( item.precio + (item.precio * $porcentajePersona))
            }
                = 
            { 

            userInfo?
              item.enOferta === true?
              formatCurrency(item.qty * PrecioClient(item.precioDeOferta,userInfo.tipoClient))
              :formatCurrency(item.qty * PrecioClient(item.precio,userInfo.tipoClient))
            :
              item.enOferta === true?
              formatCurrency(item.precioDeOferta + (item.precioDeOferta * $porcentajePersona))
              :formatCurrency( item.precio + (item.precio * $porcentajePersona))

            }                       
          </div>
        </div>
      </li>
    )
}
