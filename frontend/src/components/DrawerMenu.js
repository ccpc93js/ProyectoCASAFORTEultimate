import React from 'react';
import {Drawer, makeStyles, IconButton,useTheme} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Listas from './Listas'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { signout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import ModalSearch from './ModalSearch';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const width = '360'
const useStyles = makeStyles((theme)=>({
  list: {
    width: width,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: width,
    flexShrink: 0,
  },
  drawerPaper: {
    width: width,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));










 const DrawerMenu = (props) => {
  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) =>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
      dispatch(signout());
  }
  const classes = useStyles();
  const theme = useTheme();
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={props.open}
        onClose={props.onClose ? props.onClose: null}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <a className="logo-drawer" href="/"><img className="casaforte" src='/img/Icons/LOGO_CASA_FORTE.png' alt="casaforte"/></a>

        <div className="carrito-menu mg carrito-none-menu">
                <i className="divSearch carrito-on-none">

            <ModalSearch/>
                </i>
            
            <Link to="/cart" className="carrito-on-none"><i > <ShoppingCartIcon/></i>
                {cartItems.length > 0 && (
                    <span className="badge carrito-on-none">{cartItems.length}</span>
                )}
            </Link>
            {
                userInfo ? (
                <div className="dropdown ">
                    <Link className="userName" to="#">{userInfo.name} <i className=""><ArrowDropDownIcon/></i>{" "}</Link>
                    <ul className="dropdown-content" onClick={props.handleDrawerClose}>
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
                    <a href="/signin"><i><PersonIcon/></i></a>
                )
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="userName" >
                  Admin <i className=""><ArrowDropDownIcon/></i>
                </Link>
                <ul className="dropdown-content" onClick={props.handleDrawerClose}>
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
                      <Link to='listaUsuariosRegistrados'>Info Usuarios Registrados</Link>
                  </li>
                  {/* <li>
                    <Link to="/support">Soporte</Link>
                  </li> */}
                </ul>
              </div>
            )}
                
              
            </div>

      <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        <h2 className="titulo-filter">Menu</h2>
        <Listas>
         
        </Listas>
       
   
      </Drawer>
      
    </div>
  );
}

export default DrawerMenu