import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export const Footer = () => {
    return (
        <div>

            <div className="content-center-footer">
                <div className="footer-left">
                    <div>
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647550/Icon/LOGOS_CASA_FORTE_BLANCO_axvrtd.png' alt="casaforte" />
                    </div>
                    <p>
                        Ferreter&iacute;a Casa Forte S.A.S. es una empresa dedicada a la distribuci&oacute;n de articulos para ferreter&iacute;a en Colombia, trabajamos para que nuestros clientes accedan a los mejores productos a precios competitivos y con el mejor servicio.
                    </p>
                    <a href="/contactenos"><button className="botone">Contáctanos </button></a>
                </div>

                <div className="footer-right">
                    <div className="InfoInteres">
                        <h2>INFORMACIÓN DE INTERÉS</h2>

                        <ul className="box">
                            <li><a href="/nosotros">Nosotros</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/marcas">Marcas</a></li>
                            <li><a href="/contactenos">Cont&aacute;ctanos</a></li>
                            <li><a href="/signin">Clientes</a></li>
                            <li><a href="/ofertas">Ofertas</a></li>
                        </ul>
                    </div>

                    <div className="hablemos">
                        <h2>HABLEMOS</h2>
                        <ul className="box">
                            <li>Sede Principal</li>
                            <li>Cll 13 # 74-67 Mz G L 17 Etapa 1</li>
                            <li>Lineas de Atención al Cliente <br /> +57 (5) 66 17 326  <br></br> +57 304 648 6898</li>
                            <li>ventas@casa-forte.co</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <ul className="colera">
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">T&eacute;rminos y condiciones</a></li>
                    <li><a href="#">Pol&iacute;ticas de privacidad</a></li>
                </ul>

                <p> © 2021 - Todos los Derechos Reservados Inversiones Casa Forte | Cartagena - Colombia</p>

                <div className="socials">
                    <a href="#"><i className=""><FacebookIcon /></i></a>
                    <a href="https://www.instagram.com/casaforte.co/" target="_BLANK"><i className=""><InstagramIcon /></i></a>
                    <a href="https://api.whatsapp.com/send?phone=++573046486898&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."><i className=""><WhatsAppIcon /></i></a>
                </div>
            </div>
        </div>
    )
}
