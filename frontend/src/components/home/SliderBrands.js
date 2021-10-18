import React from 'react'
import { Fragment } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

 const SliderBrands = () => {

    const Next = () => {
        const sliderMarcas = document.getElementById("sliderMarcas");
        let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
        sliderMarcas.style.marginLeft = "-352.92px";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(() => {
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("beforeend", sliderSectionFirst)
            sliderMarcas.style.marginLeft = "-176.46px";
        }, 500);


    }

    const Prev = () => {
        const sliderMarcas = document.getElementById("sliderMarcas");
        let sliderSection = document.querySelectorAll(".slider-section");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        sliderMarcas.style.marginLeft = "0";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(() => {
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("afterbegin", sliderSectionLast)
            sliderMarcas.style.marginLeft = "-176.46px";
        }, 500);


    }

    return (
        <Fragment>
            <div className="qontiner">
                <div
                    className="hi-prev"
                    id="arrow-prev"
                    onClick={Prev}
                >
                    <i>
                        <ChevronLeftIcon />
                    </i>

                </div>

                <div className="container-central">

                    <div className="central " >
                        <ul className="sliderMarcas" id="sliderMarcas">
                            <li className="slider-section"><a href="/ABRACOL"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647555/Icon/Logo_Abracol_sycors.png" alt="abracol" /></a></li>
                            <li className="slider-section"><a href="/CILES"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/Logo_Ciles_b00dsy.jpg" alt="ciles" /></a></li>
                            <li className="slider-section"><a href="/GRIVAL"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/Logo_Grival_kzpccn.jpg" alt="grival" /></a></li>
                            <li className="slider-section"><a href="/GOYA"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_goya_baszig.jpg" alt="goya" /></a></li>
                            <li className="slider-section"><a href="/DEWALT"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_dewalt_tyfryk.jpg" alt="dewalt" /></a></li>
                            <li className="slider-section"><a href="/SINTESOLDA"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_sintesolda_gk9ozf.jpg" alt="sintesolda" /></a></li>
                            <li className="slider-section"><a href="/ARGOS"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647556/Icon/logo_argos_wslcue.jpg" alt="argos" /></a></li>
                            <li className="slider-section"><a href="/RIOPLAST"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_rioplast_ozfcdp.jpg" alt="rioplast" /></a></li>
                            <li className="slider-section"><a href="/MERCURY"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1625093447/mercury_dkevqn.png" alt="mercury" /></a></li>
                            <li className="slider-section"><a href="/LUFKIN-CRESCENT"><img className="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_crescent_q2auc5.png" alt="crescent" /></a></li>
                        </ul>
                    </div>
                </div>
                <div
                    className="hi-next" i
                    d="arrow-next"
                    onClick={Next}

                >
                    <i>
                        <ChevronRightIcon />
                    </i>
                </div>


            </div>
        </Fragment>
    )
}

export default SliderBrands