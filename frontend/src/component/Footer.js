import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';



import './Footer.css'
export const Footer = () => {
    return (
        <div>
                <div className="footer-left">
                <img src='/img/Icons/LOGOS_CASA_FORTE_BLANCO.png' alt="casaforte"/>
                <p>
                    Ferreter&iacute;a Casa Forte S.A.S. es una empresa dedicada a la distribuci&oacute;n de articulos para ferreter&iacute;a en Colombia, trabajamos para que nuestros clientes accedan a los mejores productos a precios competitivos y con el mejor servicio.
                </p>
                
                </div>

            <ul className="footer-right">
                <li>
                    <h2>Informaci&oacute;n de inter&eacute;s</h2>
                
                <ul className="box">
                    <li><a href="enlaces/nosotros.html">Nosotros</a></li>
                    <li><a href="enlaces/Productos.html">Productos</a></li>
                    <li><a href="enlaces/marcas.html">Marcas</a></li>
                    <li><a href="enlaces/Contactenos.html">Cont&aacute;ctanos</a></li>
                    <li><a href="enlaces/zona_clientes.html">Clientes</a></li>
                    <li><a href="enlaces/ofertas.html">Ofertas</a></li>
                </ul>
            </li>

        <li>
            <h2>Informaci&oacute;n Legal</h2>

            <ul className="box">
                <li><a href="#">Legal</a></li>
                <li><a href="#">T&eacute;rminos y condiciones</a></li>
                <li><a href="#">Pol&iacute;ticas de privacidad</a></li>

            </ul>
        </li>
            <li>
                <h2>Contacto</h2>

            <ul className="box">
                <li><a href="#">Sede Principal</a></li>
                <li><a href="#">Cll 13 # 74-67 Mz G L 17 Etapa 1</a></li>
                <li><a href="#">+57 6 66 17 326</a></li>
                <li><a href="#">+57 304 648 6898</a></li>

            </ul>
        </li>
        
            </ul>
            
            
        <div className="socials">
            <p>Siguenos en</p>
                <a href="#"><i className=""><FacebookIcon/></i></a>
                <a href="https://www.instagram.com/casaforte.co/" target="_BLANK"><i className=""><InstagramIcon/></i></a>
                <a href="#"><i className=""><YouTubeIcon/></i></a>

        </div>
        <div className="footer-bottom">
            <p><b>Copyright 2021 Casa Forte</b> - Todos los Derechos Reservados | Cartagena - Colombia</p>
        </div>
        </div>
    )
}
