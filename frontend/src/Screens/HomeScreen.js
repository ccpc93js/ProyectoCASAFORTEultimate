import React from 'react'
import { Helmet } from 'react-helmet'

import './HomeScreen.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import  SliderBanner  from '../components/home/SliderBanner';
import  Category  from '../components/home/Category';
import SliderBrands from '../components/home/SliderBrands';
import  Services  from '../components/home/Services';




export const HomeScreen = () => {
    const fontSizeIcons = 50

    return (
        <>
        {
            <Helmet>
                <title> Casa Forte | P&aacute;gina principal </title>
                <meta name="description" content='Pagina Principal'/>
                <meta name="rating" content="General"/>
            </Helmet>
        }

        <div className="HomeScreen-container">

            {/* Slider public */}
            <SliderBanner/>
            
            {/* Category */}
            <Category/>
            
            {/* Slider Brands */}
            <SliderBrands/>

            <div className="kontainer">

                <i className=""><StorefrontIcon style={{ fontSize: fontSizeIcons }} /></i>

                <p className="negocio">
                    M&aacute;s beneficios para tu Negocio
                </p>

                <p className="somos">
                    Somos rapidez, eficiencia, servicio, calidad y confianza, unido a un equipo dispuesto a satisfacer las necesidades de tu negocio.
                </p>

            </div>

            <div className="celular">
                <div className="celular-img-content">
                    <img className="celular-img" src="https://res.cloudinary.com/casaforte/image/upload/v1626709688/Icon/cel-casa-forte_adobespark_lpexfr.png" alt="phone" />
                </div>

                <div className="descaga-app">

                    <div className="noLimit">
                        <h4>No te limites</h4>
                        <h2>Y descubre la mejor opción en <br /> surtido de ferretería en tus manos</h2>
                    </div>

                </div>

            </div>

            <div className="slidero">
                <div id="slid"></div>
            </div>

            {/* Services */}
            <Services/>
        </div>
        </>

    )
}

