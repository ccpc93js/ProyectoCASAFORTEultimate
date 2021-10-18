import React from 'react'
import { Fragment } from 'react'

const SliderBanner = () => {

    var counter = 1;
    setInterval(function () {
        document.getElementById("radio" + counter).checked = 1
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 10000);
    
    return (
        <Fragment>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <div className="slide first">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647553/Icon/CASA_FORTE_PPAL_3_cllgv3.png' alt="" />
                    </div>
                    <div className="slide">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647554/Icon/Pantalla_de_inicio_fcigif.png' alt="" />
                    </div>
                    <div className="slide">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647549/Icon/CASA_FORTE_PPAL_2_frswaq.png' alt="" />
                    </div>

                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                </div>
            </div>
        </Fragment>
    )
}

export default SliderBanner