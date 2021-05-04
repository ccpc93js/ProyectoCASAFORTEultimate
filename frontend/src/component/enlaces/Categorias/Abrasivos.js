import React from 'react'
import Productos from '../../Productos'
// import { useCategoria } from '../../../App'

 function Abrasivos (props)  {

    // const [categorias,setCategorias]= React.useState("")
    // const {categorias}= useCategoria
  
    // const abrasivos = () =>{
    //    setCategorias("abrasivos")
    // }

   return (
        <div>
            <Productos categorias="abrasivos"/>
        </div>
   )
            
}

export default Abrasivos
