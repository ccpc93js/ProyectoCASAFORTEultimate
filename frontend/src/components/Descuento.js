import React from 'react'

export default function Descuento({producto}) {

    return (
        <div  className="producto-en-oferta">
        <p className="porcentaje">{producto.descuento}%</p>
        <p className="DCTO">DCTO</p>
      </div>
    )
}
