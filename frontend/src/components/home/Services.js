import React from 'react'
import { Fragment } from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import TelegramIcon from '@material-ui/icons/Telegram';

export const Services = () => {

    const fontSizeIcons = 50


    const servicesData = [
        {
            icon: <LocalShippingIcon style={{ fontSize: fontSizeIcons }} />,
            titulo: "Rapidez",
            text: "Nuestro compromiso con todos nuestros clientes consiste en garantizar tiempos de entrega maximos de un d&iacute;a."
        },
        {
            icon: <ThumbsUpDownIcon style={{ fontSize: fontSizeIcons }} />,
            titulo: "Confianza",
            text: "La confianza de nuestros clientes es nuestro mayor activo, por esa raz&oacute;n la construimos d&iacute;a a d&iacute;a, brindando el mejor servicio."
        },
        {
            icon: <TelegramIcon style={{ fontSize: fontSizeIcons }} />,
            titulo: "Servicio",
            text: "El servicio es nuestra garant&iacute;a, nos esforzamos para que tu negocio cuente  con los mejores productos en el menor tiempo."
        },
        {
            icon: <CardGiftcardIcon style={{ fontSize: fontSizeIcons }} />,
            titulo: "incentivos por Compras",
            text: "Tu eres nuestra prioridad y por ello recibiras recompensas por tu fidelidad, tenemos muchos premios para t&iacute;."
        },
    ]
    return (
        <Fragment>
            <div className="kontainer1">

                {
                    servicesData.map((service) => (

                        <div className="frase">

                            {service.icon}

                            <p className="subtitulo">
                                <b>{service.titulo}</b>
                            </p>

                            <p className="parrafo">{service.text}</p>
                        </div>
                    ))
                }

            </div>

        </Fragment>
    )
}
