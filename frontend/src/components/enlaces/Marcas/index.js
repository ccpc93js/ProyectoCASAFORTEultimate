import React from 'react'
import Productos from '../../Productos'




function Marcas (props) {
    const { marca } = props.match.params
 
    return (
        <div>
        <Productos marca={marca}/>


        </div>
    )
}

export default Marcas
