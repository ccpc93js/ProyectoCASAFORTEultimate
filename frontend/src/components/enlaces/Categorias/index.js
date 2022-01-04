import React from 'react'
import Productos from '../../Productos'

function Categorias(props) {
    const {categoria, subcategoria} = props.match.params
    return (
        <div>
            <Productos categoria={categoria} subcategoria={subcategoria}/>
        </div>
   )
}

export default Categorias
