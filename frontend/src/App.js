import React, { useState } from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { HomeScreen } from './Screens/HomeScreen';
import { Footer } from './components/Footer';
import  DrawerMenu  from './components/DrawerMenu';
import LoadingPageLogo from './components/LoadingPageLogo'
import Whatsapp from './components/Whatsapp'
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Toolbar from "@material-ui/core/Toolbar";



import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute';


import Productos from './components/Productos';
import ProductosTodos from './components/enlaces/Productos/ProductosTodos';
import MarcasAll from './components/MarcasAll'

// Category
import Categorias from './components/enlaces/Categorias';


// Brands
import Marcas from './components/enlaces/Marcas'

//screen
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import Contactenos from './Screens/Contactenos';
import  Nosotros  from './Screens/Nosotros';
import ZonaClientes from './Screens/ZonaClientes';
import Registrarse from './Screens/Registrarse';
import LoginRegistro from './Screens/LoginRegistro';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';



import ProductEditScreen from './Screens/ProductEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import OrderListScreen from './Screens/OrderListScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import UserListRegisteredScreen from './Screens/UserListRegisteredScreen';
import DashboardScreen from './Screens/DashboardScreen';
import SearchScreen from './Screens/SearchScreen';
import RecuperarContraseña from './Screens/RecuperarContraseña';



import ContrasenaOlvidada from './components/enlaces/ContrasenaOlvidada';
import compraExitosa from './components/correos/compraExitosa';

import MensajeRegistrado from './components/enlaces/MensajeRegistrado';
import DrawerRight, { handleCartSideClose } from './components/DrawerRight';
import EnOferta from './components/enlaces/EnOferta/index.js';
import Subcategorias from './components/enlaces/Subcategorias/index';
import ErrorScreen from './Screens/ErrorScreen';



function App(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(15),
      right: theme.spacing(7),
      color: "inherit",
      zIndex: 900
    
    }
  }));

  const [loading, setLoading] = useState(true);

  setTimeout(()=>{
    setLoading(false);
  },500)

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const accionOpen =()=>{
    setOpen(!open)
  }





  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }



  
  if (window.onload || loading){
    return (
    <LoadingPageLogo className="loading-logo"></LoadingPageLogo>

    )
  }else{

  window.addEventListener('load', () =>{
    <LoadingPageLogo className="loading-logo"></LoadingPageLogo>

  })

  return (
    
    <BrowserRouter>


    <div className="grid-container">
      <Whatsapp/>
  
        <header  >
          <NavBar  handleDrawerOpen={handleDrawerOpen}/>
          <DrawerMenu handleDrawerClose={handleDrawerClose} open={open}  onClose={accionOpen}></DrawerMenu>
          <DrawerRight  handleCartSideClose={handleCartSideClose}  />

        </header>
        <Toolbar id="back-to-top-anchor" />

        <main >
        <Switch>
          <Route
            path="/search/:productSearched?"
            component={SearchScreen}
            exact
          ></Route>

        <Route exact path="/cart/:id?" component={CartScreen}/>
        <Route exact path="/producto/:id/:info" component={ProductScreen}/>
        <Route
            path="/producto/:id/:info/edit"
            component={ProductEditScreen}
            exact
        ></Route>


         <Route exact path="/" component={HomeScreen}/>
         <Route exact path="/nosotros" component={Nosotros}/>
         <Route exact path="/productos" component={Productos}/>
         <Route exact path="/categorias/:categoria/" component={Categorias}/>
         <Route exact path="/subcategorias/:subcategoria" component={Subcategorias}/>

         <Route exact path="/marcas/:marca" component={Marcas}/>

         <Route exact path="/contactenos" component={Contactenos}/>

         <Route exact path="/signin" component={ZonaClientes}/>
         <Route exact path="/registrarse" component={Registrarse}/>
        
        <AdminRoute
           path="/loginRegistro" component={LoginRegistro}>
        </AdminRoute>

        <Route path="/reset/:id" component={RecuperarContraseña}></Route>
        <Route path="/forgotPassword" component={ContrasenaOlvidada}></Route>
        
         <Route path="/shipping" component={ShippingAddressScreen}></Route>
         <Route path="/payment" component={PaymentMethodScreen}></Route>
         <Route path="/placeorder" component={PlaceOrderScreen}></Route>
         <Route path="/order/:id" component={OrderScreen}></Route>
         <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
         
         
        <PrivateRoute 
            path="/profile" 
            component={ProfileScreen}
        ></PrivateRoute>

        <AdminRoute
            path="/listaProductos"
            component={ProductListScreen}
            exact
        ></AdminRoute>

        <AdminRoute
            path="/listPedidos"
            component={OrderListScreen}
            exact
        ></AdminRoute>

        <AdminRoute
         path="/listaUsuarios" 
         component={UserListScreen}        
         ></AdminRoute>

        <AdminRoute
         path="/listaUsuariosRegistrados" 
         component={UserListRegisteredScreen}        
         ></AdminRoute>
         
         <Route path="/messegeRegistered" component={MensajeRegistrado}></Route>

        <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
        ></AdminRoute>

          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>

          {/* ProductosTodos */}
         <Route exact path="/all" component={ProductosTodos}/>

         {/* en oferta */}
         <Route exact path="/ofertas" component={EnOferta}/>
          {/* Marcas */}
         <Route exact path="/marcas" component={MarcasAll}/>
         
         <Route exact path="/compraExitosa" component={compraExitosa}/>
         
         <Route path="/:rest*" component={ErrorScreen}></Route>

         </Switch>

        </main>
        <footer className="footer">
          <Footer/>
        </footer>

        <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
            
          
    </div>

    </BrowserRouter>
      
  );
}

}

 
 export default App;
