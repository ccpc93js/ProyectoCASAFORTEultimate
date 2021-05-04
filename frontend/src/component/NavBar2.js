import React from 'react'
import './NavBardos.css'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { Link } from 'react-router-dom';
import ModalSearch from './ModalSearch';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';




const NavBar2 = () => {
  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) =>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
      dispatch(signout());
  }
    return (
        <nav>
          <div className="menu-nav2">
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
              <i className="fas fa-bars" ></i>
            </label>

            <label className="logo">
            <a href="/"><img className="casaforte" src='/img/Icons/LOGO_CASA_FORTE.png' alt="casaforte"/></a>

            </label>
            <ul>
                <li>
                <i className="divSearch">
                  <ModalSearch/>
                </i>        
                </li>
                <li>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i>
                {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                )}
            </Link>
                </li>
                <li>
                {
                userInfo ? (
                <div className="dropdown ">
                    <Link className="userName" to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{" "}</Link>
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/profile">Perfil de usuario</Link>
                        </li>
                        <li>
                            <Link to="/orderhistory">Historial de pedidos</Link>
                        </li>
                        <li>
                            <Link to="#signout" onClick={signoutHandler}>Cerrar sesion</Link>
                        </li>
                    </ul>
                </div>
                ) : 
                (
                    <a href="/signin"> <i class="fas fa-user icon"></i></a>
                )
            }
                </li>
                <li>
                {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="userName" >
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
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
                  {/* <li>
                    <Link to="/support">Soporte</Link>
                  </li> */}
                </ul>
              </div>
            )}
                </li>
            </ul>
          </div>

          <div className="nav-second-level">

          <ul >
            <li><a href="/nosotros" className="cool-link">Nosotros</a></li>
            <li><a href="/nuevos" className="cool-link">Productos</a>
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
                    <li><a href="/MULTIMARCAS">Multimarcas</a></li>
                    <li><a href="/CODELCA">Codelca</a></li>
                    <li><a href="/LUMINEX">Luminex</a></li>
                    <li><a href="/LUFKIN-CRESCENT">Lufkin-crescent</a></li>
                    <li><a href="/FMT">FMT</a></li>

                </ul>
                </div>
            </li>
            <li><a href="/nuevos">Nuevos</a></li>
            <li><a href="/contactenos">Cont&aacute;ctanos</a></li>
            <li><a href="/signin">Clientes</a></li>
        </ul>
        </div>

        </nav>
    )
}

export default NavBar2
