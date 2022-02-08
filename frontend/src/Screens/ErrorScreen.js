import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorScreen.css'
import { Helmet } from 'react-helmet'


export default function ErrorScreen() {
    const title = "Error 404"


    return (

        <>

        {
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
                <meta name="rating" content="General" />
            </Helmet>
        }
        <div className='error404'>
            <div className='error404__container'>
                <h2 className='error404__title'>Error 404</h2>
                <p className='error404__msg'>Not Found</p>
                <div className="return-to-shop">
                    <Link to="/" ><button className="button return-to-shop"> Regresar </button></Link>
                </div>
            </div>
        </div>
        </>

    )
}
