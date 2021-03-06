import React, { useState } from 'react'
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { Link } from 'react-router-dom';
import ModalSearch from './ModalSearch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import { handleCartSideClose, handleCartSideOpen } from './DrawerRight';
import axios from '../../node_modules/axios/index';





export const NavBar = (props) => {
    
    const cart = useSelector((state)=> state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector((state) =>state.userSignin);
    const {userInfo} = userSignin;

    const [puntosYa, setPuntosYa] = useState("");
    const dispatch = useDispatch();
    const signoutHandler = () =>{
        dispatch(signout());
    }


    const handleSearhModalOpen = (e) =>{
        // e.preventDefault();
       const ModalC = document.querySelector(".SearchBar-ModalC")
       const Modal = document.querySelector(".Modal");

       Modal.classList.toggle("Modal-close")
       ModalC.classList.toggle("ModalC-close")
       Modal.ariaHidden = "true"
       ModalC.ariaHidden = "true"


    }


    const handleSearhModalClose = (e) =>{
        // e.preventDefault();
        const ModalC = document.querySelector(".SearchBar-ModalC")
        const Modal = document.querySelector(".Modal");
        Modal.classList.toggle("Modal-close")
        ModalC.classList.toggle("ModalC-close")
        // ModalC.style.visibility = "hidden";
        // ModalC.style.opacity = "0";

        Modal.ariaHidden = "false"
        ModalC.ariaHidden = "false"


    }

    window.addEventListener("click", (e) =>{
        const ModalC = document.querySelector(".SearchBar-ModalC")
        const Modal = document.querySelector(".Modal");
      
        if(e.target === ModalC ){
 
            Modal.ariaHidden = "false"
            ModalC.ariaHidden = "false"
            // ModalC.style.visibility = "hidden";
            // ModalC.style.opacity = "0";


        }

      })

      const cargarPuntosUsuariosPuntosYA = async(userInfo) =>{
        if(userInfo){
        try {
    
       const {data} = await axios.get(`http://puntosya.azurewebsites.net/puntosya/registro_usuario_api.php?local=326&clave=pjt3anu1&cedula=${userInfo.nit}`)
        console.log(data);
        // alert(data);
        setPuntosYa(data)
    
        }catch (error){
    
            const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
            console.log(message)
        }
        }

      }

    //   cargarPuntosUsuariosPuntosYA(userInfo)

    return (
        <div>
        <nav className="NavBar-content">
            <div>

        <div className="menu1">
            <button
                 className="menu-button"
                onClick={()=>{
                    props.handleDrawerOpen()
                    handleCartSideClose()
                    handleSearhModalClose()
                }}
                // className="menu-button"
                size="small"
                >
                <MenuIcon/>
            </button>


            <a className="casaforte-a" href="/" aria-label="inicio"><img className="casaforte" src='https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png' alt="casaforte"/></a>
            <div className="carrito " >
                <i className="divSearch" aria-label="buscar" alt="buscar">

                    <IconButton 
                    aria-label="menu " 
                    color="inherit"
                    size ="small"
                    // className={openModal}
                    onClick={handleSearhModalOpen}
                    
                    >
                    <SearchIcon/>
                    {/* <i className="fas fa-search"></i> */}
                    </IconButton>

                </i>
            {
            (props.history === "/cart")?(""):

                <i className="cart-icon"
                    onClick={()=>{
                            handleCartSideOpen()
                            handleSearhModalClose()
        
                        }
                            
                    }
                >
                 <ShoppingCartIcon/>
                {cartItems.length > 0 && (
                    <span className="badge ">{cartItems.length}</span>
                    )}
                </i>

    
            }
            {
                userInfo ? (
                    <div className="dropdown carrito-none">
                    <span className="userName" to="#">{userInfo.name} <i className=""><ArrowDropDownIcon/></i>{" "}</span>
                    <ul className="dropdown-content" onClick={handleSearhModalClose}>
                        <li>
                            <Link to="/profile" >Perfil de usuario</Link>
                        </li>
                        <li>
                            <Link to="/orderhistory">Historial de pedidos</Link>
                        </li>
                        {/* {
                            puntosYa.length === 0? "" :
                        <li> */}
                            {/* <Link to="#">{puntosYa.length === 0? "" : `PuntosYa: ${puntosYa}`}</Link> */}

                            {/* <Link to="#">{`PuntosYa: ${puntosYa}`}</Link>
                        </li>
                        } */}
                        <li>
                            <Link to="#signout" onClick={signoutHandler} aria-label="cerrar sesion">Cerrar sesion</Link>
                        </li>
                    </ul>
                </div>
                ) : 
                (
                    <a href="/signin" className="carrito-none" aria-label="iniciar sesion"><i><PersonIcon/></i></a>
                    )
                }
            {userInfo && userInfo.isAdmin && (
                <div className="dropdown carrito-none">
                <span to="#admin" className="userName" aria-label="admin">
                  Admin <i className=""><ArrowDropDownIcon/></i>
                </span>
                <ul className="dropdown-content" onClick={handleSearhModalClose}>
                  {/* <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li> */}
                  <li>
                    <Link to="/listaProductos">Productos</Link>
                  </li>
                  <li>
                    <Link to="/listPedidos">Pedidos</Link>
                  </li>
                  <li>
                    <Link to="/listaUsuarios">Usuarios</Link>
                  </li>
                  <li>
                      <Link to='/loginRegistro'>Registrar Usuario</Link>
                  </li>
                  <li>
                      <Link to='/listaUsuariosRegistrados'>Info Usuarios Registrados</Link>
                  </li>
                  {/* <li>
                    <Link to="/support">Soporte</Link>
                </li> */}
                </ul>
              </div>
            )}
                
              
            </div>

        <div className="menu2">
        <ul >
            <li><a href="/nosotros" className="cool-link">Nosotros</a></li>
            <li><a href="/all" className="cool-link">Productos</a>
                <div className="shadow-box-ul">
                <ul>
                    <li><a href="/categorias/abrasivos">Abrasivos</a></li>
                    <li><a href="/categorias/accesorios-para-herramientas">Accesorios para Herramientas</a></li>
                    <li><a href="/categorias/amarres">Amarres</a></li>
                    <li><a href="/categorias/cerrajeria">Cerrajeria</a></li>
                    <li><a href="/categorias/construccion">Construcci&oacute;n</a></li>
                </ul>

                <ul>
                    <li><a href="/categorias/electricos">Electricos</a></li>
                    <li><a href="/categorias/fijaciones">Fijaciones</a></li>
                    <li><a href="/categorias/griferia-y-plomeria">Griferia y Plomeria</a></li>
                    <li><a href="/categorias/pegantes-y-adhesivos">Pegantes & Adhesivos</a></li>
                    <li><a href="/categorias/pinturas">Pinturas</a></li>
                </ul>
                <ul>
                <li><a href="/categorias/herramientas-manuales">Herramientas manuales</a></li>

                </ul>
                </div>

            </li>
            <li><a href="/marcas" className="cool-link">Marcas</a>
                <div className="shadow-box-ul">
                <ul>
                    <li><a href="/marcas/ABRACOL">Abracol</a></li>
                    <li><a href="/marcas/CILES">Ciles</a></li>
                    <li><a href="/marcas/GRIVAL">Grival</a></li>
                    <li><a href="/marcas/NICHOLSON">Nicholson</a></li>
                    <li><a href="/marcas/RIOPLAST">Rioplast</a></li>
                </ul>

                <ul>
                    <li><a href="/marcas/SINTESOLDA">Sintesolda</a></li>
                    <li><a href="/marcas/GOYA">Goya</a></li>
                    <li><a href="/marcas/OSBLACK">Osblack</a></li>
                    <li><a href="/marcas/DEWALT">Dewalt</a></li>
                    <li><a href="/marcas/MERCURY">Mercury</a></li>
                </ul>

                <ul>
                    <li><a href="/marcas/INDUMA">Induma</a></li>
                    <li><a href="/marcas/UYUSTOOLS">Uyustools</a></li>
                    <li><a href="/marcas/SECURITY">Security</a></li>
                    <li><a href="/marcas/EGRET">egret</a></li>
                    <li><a href="/marcas/ARGOS">argos</a></li>
                </ul>
                <ul>
                    <li><a href="/marcas/MULTIMARCA">Multimarca</a></li>
                    <li><a href="/marcas/CODELCA">Codelca</a></li>
                    <li><a href="/marcas/LUMINEX">Luminex</a></li>
                    <li><a href="/marcas/LUFKIN-CRESCENT">Lufkin-crescent</a></li>

                </ul>
                </div>
            </li>
            <li><a href="/ofertas">Ofertas</a></li>
            <li><a href="/contactenos">Cont&aacute;ctanos</a></li>
            <li><a href="/signin">Clientes</a></li>
        </ul>
        </div>
        </div>
        

        
        </div>


      
        <ModalSearch handleSearhModalClose={handleSearhModalClose}/>
       
        
        
        </nav>
        </div>
    )
}
