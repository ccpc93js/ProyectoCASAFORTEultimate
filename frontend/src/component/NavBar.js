import React from 'react'
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





export const NavBar = (props) => {
    
    const cart = useSelector((state)=> state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector((state) =>state.userSignin);
    const {userInfo} = userSignin;
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
      
        if(e.target == ModalC ){
 
            Modal.ariaHidden = "false"
            ModalC.ariaHidden = "false"
            // ModalC.style.visibility = "hidden";
            // ModalC.style.opacity = "0";


        }

      })



    return (
        <div>
        <nav className="NavBar-content">
            <div>

        <div className="menu1">
            <button className="menu-button" aria-label="menu">
            <IconButton
                onClick={()=>{
                    props.handleDrawerOpen()
                    handleCartSideClose()
                    handleSearhModalClose()
                }}
                className="menu-button"
                size="small"
                >
                <MenuIcon/>
            </IconButton>

            </button>

            <a className="casaforte-a" href="/" aria-label="inicio"><img className="casaforte" src='/img/Icons/LOGO_CASA_FORTE.png' alt="casaforte"/></a>
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
            (props.history == "/cart")?(""):
            <Link  aria-label="carrito"
                onClick={()=>{
                    handleCartSideOpen()
                    handleSearhModalClose()

                }
                    
            }
            >
                <i className="cart-icon">
                 <ShoppingCartIcon/>
                {cartItems.length > 0 && (
                    <span className="badge ">{cartItems.length}</span>
                    )}
                </i>

            </Link>
            }
            {
                userInfo ? (
                    <div className="dropdown carrito-none">
                    <Link className="userName" to="#">{userInfo.name} <i className=""><ArrowDropDownIcon/></i>{" "}</Link>
                    <ul className="dropdown-content" onClick={handleSearhModalClose}>
                        <li>
                            <Link to="/profile" >Perfil de usuario</Link>
                        </li>
                        <li>
                            <Link to="/orderhistory">Historial de pedidos</Link>
                        </li>
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
                <Link to="#admin" className="userName" aria-label="admin">
                  Admin <i className=""><ArrowDropDownIcon/></i>
                </Link>
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
                    <li><a href="/abrasivos">Abrasivos</a></li>
                    <li><a href="/accesorios-para-herramientas">Accesorios para Herramientas</a></li>
                    <li><a href="/amarres">Amarres</a></li>
                    <li><a href="/cerrajeria">Cerrajeria</a></li>
                    <li><a href="/construccion">Construcci&oacute;n</a></li>
                </ul>

                <ul>
                    <li><a href="/electricos">Electricos</a></li>
                    <li><a href="/fijaciones">Fijaciones</a></li>
                    <li><a href="/griferia-y-plomeria">Griferia y Plomeria</a></li>
                    <li><a href="/pegantes-y-adhesivos">Pegantes & Adhesivos</a></li>
                    <li><a href="/pinturas">Pinturas</a></li>
                </ul>
                <ul>
                <li><a href="/herramientas-manuales">Herramientas manuales</a></li>

                </ul>
                </div>

            </li>
            <li><a href="/marcas" className="cool-link">Marcas</a>
                <div className="shadow-box-ul">
                <ul>
                    <li><a href="/ABRACOL">Abracol</a></li>
                    <li><a href="/CILES">Ciles</a></li>
                    <li><a href="/GRIVAL">Grival</a></li>
                    <li><a href="/NICHOLSON">Nicholson</a></li>
                    <li><a href="/RIOPLAST">Rioplast</a></li>
                </ul>

                <ul>
                    <li><a href="/SINTESOLDA">Sintesolda</a></li>
                    <li><a href="/GOYA">Goya</a></li>
                    <li><a href="/OSBLACK">Osblack</a></li>
                    <li><a href="/DEWALT">Dewalt</a></li>
                    <li><a href="/PEGADIT">Pegadit</a></li>
                </ul>

                <ul>
                    <li><a href="/INDUMA">Induma</a></li>
                    <li><a href="/UYUSTOOLS">Uyustools</a></li>
                    <li><a href="/SEGURITY">Security</a></li>
                    <li><a href="/EGRET">egret</a></li>
                    <li><a href="/ARGOS">argos</a></li>
                </ul>
                <ul>
                    <li><a href="/MULTIMARCA">Multimarca</a></li>
                    <li><a href="/CODELCA">Codelca</a></li>
                    <li><a href="/LUMINEX">Luminex</a></li>
                    <li><a href="/LUFKIN-CRESCENT">Lufkin-crescent</a></li>
                    <li><a href="/FMT">FMT</a></li>

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
