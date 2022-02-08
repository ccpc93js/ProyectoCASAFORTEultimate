import React from 'react'
import './MarcasAll.css'
import { Link } from 'react-router-dom';
import data from './data.js'
import Zoom from "react-reveal/Zoom"
import { Helmet } from 'react-helmet'



const MarcasAll = () => {
    const marcas = data.marcas
    console.log("marcas", marcas)

    const title = "Marcas"


    return (


        <>

            {
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={title} />
                    <meta name="rating" content="General" />
                </Helmet>
            }
            <div className="container-marcas" >
                <div className=" row-marcas ">


                    {
                        marcas.map(x => (
                            <Zoom>
                                <Link to={`marcas/${x.nombre}`} className="">
                                    <img className="marca imgnormal shadow-box" src={x.img} alt={x.nombre} />
                                </Link>
                            </Zoom>

                        ))


                    }


                </div>
            </div>
        </>

    )
}

export default MarcasAll