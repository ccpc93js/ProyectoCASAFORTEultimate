import React from 'react'
import { Fragment } from 'react'

export const Category = () => {
    return (
        <Fragment>
            <div className="contenedore">
                <figure>
                    <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/abrasivos-industriales-medellin_gdldhy.jpg" alt="abra" />

                    <div className="capar">
                        <h3>Abrasivos</h3>
                        <a href="/abrasivos">VER PRODUCTOS</a>

                    </div>

                </figure>

                <figure>
                    <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/ht_medium_fh3bhp.png" alt="elec" />
                    <div className="capar">
                        <h3>El&eacute;ctricos</h3>
                        <a href="/electricos">VER PRODUCTOS</a>

                    </div>
                </figure>

                <figure>
                    <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647552/Icon/negro_nuevo_blanco1_ojoxne.jpg" alt="grife" />
                    <div className="capar">
                        <h3>Grifer&iacute;a</h3>
                        <a href="/griferia-y-plomeria">VER PRODUCTOS</a>

                    </div>
                </figure>

            </div>

            <div className="button-ver-productos">
                <a href="/all"><button className="button-see">VER TODOS LOS PRODUCTOS</button></a>
            </div>
        </Fragment>
    )
}
