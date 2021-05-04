import React from 'react'
import './HomeScreen.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import TelegramIcon from '@material-ui/icons/Telegram';
// import {Link} from 'react-router-dom';
// import data from './data.js'

// import slide1 from '/PROYECTO CASA FORTE/frontend/public/img/Icons/Pantalla de inicio.png'
// import slide2 from '/PROYECTO CASA FORTE/frontend/public/img/Icons/CASA FORTE PPAL 2.png'
// import slide3 from '/PROYECTO CASA FORTE/frontend/public/img/Icons/CASA FORTE PPAL 3.png'


export const HomeScreen = () => {

    var counter = 1;
    setInterval(function () {
        document.getElementById("radio" + counter).checked = 1
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 6000);
    return (
        <div className="HomeScreen-container">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <div className="slide first">
                        <img src='./img/Icons/CASA_FORTE_PPAL_3.png' alt=""/>
                    </div>
                    <div className="slide">
                        <img src='./img/Icons/Pantalla_de_inicio.png' alt=""/>
                    </div>
                    <div className="slide">
                        <img src='./img/Icons/CASA_FORTE_PPAL_2.png' alt=""/>
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                
                </div>
                <div className="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
                </div>
            </div>
         
            <div className="contenedore">
    <figure>
        <img src="./img/Icons/abrasivos-industriales-medellin.jpg" alt="abra"/>

        

        <div className="capar">
            <h3>Abrasivos</h3> 
            <a href="/abrasivos">VER PRODUCTOS</a>

        </div>
      
    </figure>
    <figure>
        <img src="./img/Icons/ht_medium.jpg" alt="elec"/>
        <div className="capar">
            <h3>El&eacute;ctricos</h3> 
            <a href="/electricos">VER PRODUCTOS</a>

        </div>
    </figure>
  
   <figure>
        <img src="./img/Icons/negro_nuevo_blanco1.jpg" alt="grife"/>
        <div className="capar">
            <h3>Grifer&iacute;a</h3> 
            <a href="/griferia-y-plomeria">VER PRODUCTOS</a>

        </div>
    </figure>
  

</div>

<div className="button-ver-productos">
    <a href="/nuevos"><input type="button" value="VER TODOS LOS PRODUCTOS" className="botton"/></a> 
</div>

<div className="qontiner">

    <div className="central">
        
        <ul className="marca">
            <li><a href="/abracol"><img class="marca" src="./img/Icons/Logo_Abracol.png" alt="abracol"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/ciles"><img class="marca" src="./img/Icons/Logo_Ciles.png" alt="ciles"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/grival"><img class="marca" src="./img/Icons/Logo_Grival.jpg" alt="grival"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/goya"><img class="marca" src="./img/Icons/logo_goya.jpg" alt="goya"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/dewalt"><img class="marca" src="./img/Icons/logo_dewalt.jpg" alt="dewalt"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/sintesolda"><img class="marca" src="./img/Icons/logo_sintesolda.jpg" alt="sintesolda"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/argos"><img class="marca" src="./img/Icons/logo_argos.jpg" alt="argos"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="#"><img class="marca" src="./img/Icons/logo_corona.png" alt="corona"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="#"><img class="marca" src="./img/Icons/logo_celta.png" alt="celta"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/rioplast"><img class="marca" src="./img/Icons/logo_rioplast.jpg" alt="rioplast"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="#"><img class="marca" src="./img/Icons/logo_legrand.jpg" alt="legrand"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="#"><img class="marca" src="./img/Icons/logo_pegaucho.jpg" alt="pegaucho"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="#"><img class="marca" src="./img/Icons/logo_stanley.png" alt="stanley"/></a></li>
        </ul>
        <ul className="marca">
            <li><a href="/lufkin-crescent"><img class="marca" src="./img/Icons/logo_crescent.png" alt="crescent"/></a></li>
        </ul>
    
    </div>

    </div>
 

<div className="kontainer">
    
    <i class=""><StorefrontIcon/></i>

    <p className="negocio">
        M&aacute;s beneficios para tu Negocio
    </p>

    <p className="somos">
        Somos rapidez, eficiencia, servicio, calidad y confianza, unido a un equipo dispuesto a satisfacer las necesidades de tu negocio.
    </p>

</div>

<div className="celular">
      <div class="celular-img-content">
          <img class="celular-img" src="./img/Icons/celular_3.jpg" alt="phone"/>
      </div>
    
<div className="descaga-app">
<h4>Descarga la App</h4>
<br/>
<br/>

<h2>Y descubre la mejor opci&oacute;n en <br></br> surtido de ferreter&iacute;a en tus manos</h2>
<br/>
<br/>
<ul>
    <li><a href="#"><img class="ul-img" src="./img/Icons/disponible-en-google-play-badge-1.png" alt="android"/></a></li>
</ul>
<ul>
   <li><a href="#"><img class="ul-img" src="./img/Icons/logo-apple-store-e1587126330625.png" alt="appstore"/></a></li>
</ul>
</div>
    
</div>



<div className="slidero">
    <div id="slid"></div>
</div>


<div className="kontainer1">    

    <i class=""><LocalShippingIcon/></i>

    <p className="subtitulo">
    <b>Rapidez</b> 
    </p>

    <p className="parrafo">
        Nuestro compromiso con todos nuestros clientes <br></br> consiste en garantizar tiempos de entrega <br></br> maximos de un d&iacute;a.
    </p>

    <i class=""><ThumbsUpDownIcon/></i>

    <p className="subtitulo">
        <b>Confianza</b> 
        </p>
    
        <p className="parrafo">
            La confianza de nuestros clientes es nuestro <br></br> mayor activo, por esa raz&oacute;n la construimos <br></br> d&iacute;a a d&iacute;a, brindando el mejor servicio
        </p>

    <i class=""><TelegramIcon/></i>

    <p className="subtitulo">
        <b>Servicio</b> 
    </p>
    <p className="parrafo">
        El servicio es nuestra garant&iacute;a, <br></br> nos esforzamos para que tu negocio cuente <br></br> con los mejores productos en el menor tiempo.
    </p>

    <i class=""><CardGiftcardIcon/></i>

    <p className="subtitulo">
        <b>Puntos por Compras</b> 
        </p>
    
        <p className="parrafo">
            Tu eres nuestra prioridad y por ello <br></br> recibiras recompensas por tu fidelidad, <br></br> tenemos muchos premios para t&iacute;.
        </p>
</div>

            
        </div>
    )
}
