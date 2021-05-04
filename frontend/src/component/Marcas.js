import React from 'react'
import './Marcas.css'
import {Link} from 'react-router-dom';
import data from './data.js'


 const Marcas = () => {
    const marcas = data.marcas
    console.log("marcas",marcas)

    return (
        <div className="container-marcas" >
            <div className=" row-marcas ">

            
                {
                marcas.map(x=>(
                    <Link to={`/${x.nombre}`} className="">
                        <img className="marca imgnormal shadow-box" src={x.img} alt={x.nombre} />
                    </Link>
                

                ))

                
            }
        

            </div>
        </div>
    )
}

export default Marcas