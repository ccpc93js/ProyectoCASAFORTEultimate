import React from 'react'
import './HomeScreen.css'
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import TelegramIcon from '@material-ui/icons/Telegram';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import Glide from '@glidejs/glide'// import {Link} from 'react-router-dom';
// import data from './data.js'



export const HomeScreen = () => {

    var counter = 1;
    setInterval(function () {
        document.getElementById("radio" + counter).checked = 1
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 8000);


    const fontSizeIcons = 50




    // const sliderMarcas = () =>{
    //     setTimeout(()=>{

    //         const sliderMarcas = document.getElementById("sliderMarcas");
    //         sliderMarcas.style.opacity = "0"
    //         let sliderSection = document.querySelectorAll(".slider-section");
    //         let sliderSectionLast = sliderSection[sliderSection.length - 1];
    //         sliderMarcas.insertAdjacentElement("afterbegin", sliderSectionLast);
    //         sliderMarcas.style.transition = "all 0.5s ease"
    //         sliderMarcas.style.opacity = "1"


    //         // console.log(sliderSection)
    //         // console.log(sliderSectionLast)
    //     },3000)


    // }

    

    const Next = () =>{
        const sliderMarcas = document.getElementById("sliderMarcas");
        let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
        sliderMarcas.style.marginLeft = "-352.92px";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(()=>{
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("beforeend", sliderSectionFirst)
            sliderMarcas.style.marginLeft = "-176.46px";
        },500);


    }

    const Prev = () =>{
        const sliderMarcas = document.getElementById("sliderMarcas");
        let sliderSection = document.querySelectorAll(".slider-section");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        sliderMarcas.style.marginLeft = "0";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(()=>{
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("afterbegin", sliderSectionLast)
            sliderMarcas.style.marginLeft = "-176.46px";
        },500);


    }

    // sliderMarcas()




    return (
        <div className="HomeScreen-container">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <div className="slide first">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647553/Icon/CASA_FORTE_PPAL_3_cllgv3.png' alt=""/>
                    </div>
                    <div className="slide">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647554/Icon/Pantalla_de_inicio_fcigif.png' alt=""/>
                    </div>
                    <div className="slide">
                        <img src='https://res.cloudinary.com/casaforte/image/upload/v1622647549/Icon/CASA_FORTE_PPAL_2_frswaq.png' alt=""/>
                    </div>

                </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                
                    <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    </div>
            </div>
         
     <div className="contenedore">
    <figure>
        <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/abrasivos-industriales-medellin_gdldhy.jpg" alt="abra"/>

        <div className="capar">
            <h3>Abrasivos</h3> 
            <a href="/abrasivos">VER PRODUCTOS</a>

        </div>
      
    </figure>
    <figure>
        <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/ht_medium_fh3bhp.png" alt="elec"/>
        <div className="capar">
            <h3>El&eacute;ctricos</h3> 
            <a href="/electricos">VER PRODUCTOS</a>

        </div>
    </figure>
  
   <figure>
        <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647552/Icon/negro_nuevo_blanco1_ojoxne.jpg" alt="grife"/>
        <div className="capar">
            <h3>Grifer&iacute;a</h3> 
            <a href="/griferia-y-plomeria">VER PRODUCTOS</a>

        </div>
    </figure>
  

</div>

<div className="button-ver-productos">
    <a href="/all"><button className="button-see">VER TODOS LOS PRODUCTOS</button></a> 
</div>

<div className="qontiner">
        <div 
        className="hi-prev" 
        id="arrow-prev"
        onClick={Prev}
        >
            <i>
             <ChevronLeftIcon/>
            </i> 
            
        </div>

    <div className="container-central">

    <div className="central " >


         <ul className="sliderMarcas" id="sliderMarcas">
            <li className="slider-section"><a href="/ABRACOL"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647555/Icon/Logo_Abracol_sycors.png" alt="abracol"/></a></li>
            <li className="slider-section"><a href="/CILES"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/Logo_Ciles_b00dsy.jpg" alt="ciles"/></a></li>
            <li className="slider-section"><a href="/GRIVAL"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/Logo_Grival_kzpccn.jpg" alt="grival"/></a></li>
            <li className="slider-section"><a href="/GOYA"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_goya_baszig.jpg" alt="goya"/></a></li>
            <li className="slider-section"><a href="/DEWALT"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_dewalt_tyfryk.jpg" alt="dewalt"/></a></li>
            <li className="slider-section"><a href="/SINTESOLDA"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_sintesolda_gk9ozf.jpg" alt="sintesolda"/></a></li>
            <li className="slider-section"><a href="/ARGOS"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647556/Icon/logo_argos_wslcue.jpg" alt="argos"/></a></li>
            <li className="slider-section"><a href="/RIOPLAST"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_rioplast_ozfcdp.jpg" alt="rioplast"/></a></li>
            <li className="slider-section"><a href="/MERCURY"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1625093447/mercury_dkevqn.png" alt="mercury"/></a></li>
            <li className="slider-section"><a href="/LUFKIN-CRESCENT"><img class="marca" src="https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_crescent_q2auc5.png" alt="crescent"/></a></li>
        </ul>


    
    </div>
    </div>
         <div 
          className="hi-next" i
          d="arrow-next"
          onClick={Next}
          
          >
            <i>

            <ChevronRightIcon/>
            </i>
        </div>


    </div>
 

<div className="kontainer">
    
    <i class=""><StorefrontIcon style={{ fontSize: fontSizeIcons }}/></i>

    <p className="negocio">
        M&aacute;s beneficios para tu Negocio
    </p>

    <p className="somos">
        Somos rapidez, eficiencia, servicio, calidad y confianza, unido a un equipo dispuesto a satisfacer las necesidades de tu negocio.
    </p>

</div>

<div className="celular">
      <div class="celular-img-content">
          <img class="celular-img" src="https://res.cloudinary.com/casaforte/image/upload/v1626709688/Icon/cel-casa-forte_adobespark_lpexfr.png" alt="phone"/>
      </div>
    
<div className="descaga-app">

<div className="noLimit">
  <h4>No te limites</h4>
  <h2>Y descubre la mejor opción en <br /> surtido de ferretería en tus manos</h2>
</div>

{/* <h4>Descarga la App</h4>
<br/>
<br/>

<h2>Y descubre la mejor opci&oacute;n en <br></br> surtido de ferreter&iacute;a en tus manos</h2>
<br/>
<br/>
<ul>
    <li><a href="#"><img class="ul-img" src="https://res.cloudinary.com/casaforte/image/upload/v1622647551/Icon/disponible-en-google-play-badge-1_yfccua.png" alt="android"/></a></li>
</ul>
<ul>
   <li><a href="#"><img class="ul-img" src="https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo-apple-store-e1587126330625_ysijwv.png" alt="appstore"/></a></li>
</ul> */}
</div>
    
</div>



<div className="slidero">
    <div id="slid"></div>
</div>


<div className="kontainer1">  

        <div className="frase">

    <LocalShippingIcon style={{ fontSize: fontSizeIcons }} />

    <p className="subtitulo">
    <b>Rapidez</b> 
    </p>

    <p className="parrafo">
        Nuestro compromiso con todos nuestros clientes consiste en garantizar tiempos de entrega maximos de un d&iacute;a.
    </p>
        </div>

        <div className="frase">

         <ThumbsUpDownIcon style={{ fontSize: fontSizeIcons }} />

    <p className="subtitulo">
        <b>Confianza</b> 
        </p>
    
        <p className="parrafo">
            La confianza de nuestros clientes es nuestro mayor activo, por esa raz&oacute;n la construimos d&iacute;a a d&iacute;a, brindando el mejor servicio.
        </p>

        </div>

        <div className="frase">


      <TelegramIcon style={{ fontSize: fontSizeIcons }} />

    <p className="subtitulo">
        <b>Servicio</b> 
    </p>
    <p className="parrafo">
        El servicio es nuestra garant&iacute;a, nos esforzamos para que tu negocio cuente  con los mejores productos en el menor tiempo.
    </p>
        </div>


        <div className="frase">

   <CardGiftcardIcon style={{ fontSize: fontSizeIcons }} />

    <p className="subtitulo">
        <b>incentivos por Compras</b> 
        </p>
    
        <p className="parrafo">
            Tu eres nuestra prioridad y por ello recibiras recompensas por tu fidelidad, tenemos muchos premios para t&iacute;.
        </p>
        </div>
</div>

            
        </div>
    )
}

