import React from 'react'
import Productos from '../../Productos'


function Subcategorias(props) {
    const {subcategoria} = props.match.params
    return (
        <div>
        <Productos subcategoria={subcategoria}/>
            
        </div>
    )
}

export default Subcategorias
