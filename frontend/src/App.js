import React, { useState } from 'react'

import { BrowserRouter, Route,  } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { HomeScreen } from './Screens/HomeScreen';
import { Footer } from './components/Footer';
import { Nosotros } from './components/enlaces/Nosotros';
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
import Marcas from './components/Marcas'

// Category
import Abrasivos from './components/enlaces/Categorias/Abrasivos'
import AccesoriosDeHerramientas from './components/enlaces/Categorias/AccesoriosDeHerramientas'
import Amarres from './components/enlaces/Categorias/Amarres'
import Cerrajeria from './components/enlaces/Categorias/Cerrajeria'
import Construccion from './components/enlaces/Categorias/Construccion'
import Electricos from './components/enlaces/Categorias/Electricos'
import Griferiayplomeria from './components/enlaces/Categorias/Griferiayplomeria'
import Pegantesyadhesivos from './components/enlaces/Categorias/Pegantesyadhesivos'
import Pinturas from './components/enlaces/Categorias/Pinturas'
import Fijaciones from './components/enlaces/Categorias/Fijaciones';

// Brands
import Abracol from './components/enlaces/Marcas/Abracol'
import Ciles from './components/enlaces/Marcas/Ciles'
import Grival from './components/enlaces/Marcas/Grival'
import Nicholson from './components/enlaces/Marcas/Nicholson'
import Rioplast from './components/enlaces/Marcas/Rioplast'
import Sintesolda from './components/enlaces/Marcas/Sintesolda'
import Goya from './components/enlaces/Marcas/Goya'
import Osblack from './components/enlaces/Marcas/Osblack'
import Dewalt from './components/enlaces/Marcas/Dewalt'
import Codelca from './components/enlaces/Marcas/Codelca'
import Uyustools from './components/enlaces/Marcas/Uyustools'
import Security from './components/enlaces/Marcas/Security'
import Argos from './components/enlaces/Marcas/Argos'
import Mercury from './components/enlaces/Marcas/Mercury'

import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import Contactenos from './components/enlaces/Contactenos';
import ZonaClientes from './components/enlaces/ZonaClientes';
import Registrarse from './components/enlaces/Registrarse';
import LoginRegistro from './components/enlaces/LoginRegistro';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LijasYtelasRecubiertas from './components/enlaces/subCategorias/LijasYtelasRecubiertas';
import DiscosAbrasivos from './components/enlaces/subCategorias/DiscosAbrasivos';
import DiscosDeMetal from './components/enlaces/subCategorias/DiscosDeMetal';
import AmarresPlasticos from './components/enlaces/subCategorias/AmarresPlasticos';
import AmarresParaTejas from './components/enlaces/subCategorias/AmarresParaTejas';
import Candados from './components/enlaces/subCategorias/Candados';
import Cerraduras from './components/enlaces/subCategorias/Cerraduras';
import Cerrojos from './components/enlaces/subCategorias/Cerrojos';
import Cementos from './components/enlaces/subCategorias/Cementos';
import EnchufesYclavijas from './components/enlaces/subCategorias/EnchufesYclavijas';
import TomasEinterruptores from './components/enlaces/subCategorias/TomasEinterruptores';
import Breakers from './components/enlaces/subCategorias/Breakers';
import CajasYelectricos from './components/enlaces/subCategorias/CajasYelectricos';
import Cintas from './components/enlaces/subCategorias/Cintas';
import PlafonesYrosetas from './components/enlaces/subCategorias/PlafonesYrosetas';
import PegantesParaConstruccion from './components/enlaces/subCategorias/PegantesPraraConstruccion';
import SiliconasYselladores from './components/enlaces/subCategorias/SIliconasYselladores';
import HerramientasParaPintar from './components/enlaces/subCategorias/HerramientasParaPintar';
import Tornillos from './components/enlaces/subCategorias/Tornillos';
import ChazosEnNylon from './components/enlaces/subCategorias/ChazosEnNylon';
import ChazosMetalicos from './components/enlaces/subCategorias/ChazosMetalicos';
import SolucionesParaBaños from './components/enlaces/subCategorias/SolucionesParaBaños';
import SolucionesParaCocinas from './components/enlaces/subCategorias/SolucionesParaCocinas';
import Duchas from './components/enlaces/subCategorias/Duchas';
import JardinYexteriores from './components/enlaces/subCategorias/JardinYexteriores';
import GriferiaLavamanos from './components/enlaces/subCategorias/GriferiaLavamanos';
import SolucionesParaElHogar from './components/enlaces/subCategorias/SolucionesParaElHogar';
import AlbanileriaYconstruccion from './components/enlaces/subCategorias/AlbanileriaYconstruccion';
import LimasYescofinas from './components/enlaces/subCategorias/LimasYescofinas';
import HerramientasDeAcabado from './components/enlaces/subCategorias/HerramientasDeAcabado';
import PinzasYalicates from './components/enlaces/subCategorias/PinzasYalicates';
import HerramientasManualesDeCorte from './components/enlaces/subCategorias/HerramientasManualesDeCorte';
import HerramientasDeMedicion from './components/enlaces/subCategorias/HerramientasDeMedicion';
import Destornilladores from './components/enlaces/subCategorias/Destornilladores';


import ProductEditScreen from './Screens/ProductEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import OrderListScreen from './Screens/OrderListScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import Luminex from './components/enlaces/Marcas/Luminex';
import Crescent from './components/enlaces/Marcas/Crescent';
import Multimarca from './components/enlaces/Marcas/Multimarca';
import Egret from './components/enlaces/Marcas/Egret';
import Induma from './components/enlaces/Marcas/Induma';
import HerramientasManuales from './components/enlaces/Categorias/HerramientasManuales';
import UserListRegisteredScreen from './Screens/UserListRegisteredScreen';
import MensajeRegistrado from './components/enlaces/MensajeRegistrado';
import LufkinCrescent from './components/enlaces/Marcas/LufkinCrescent';
import DashboardScreen from './Screens/DashboardScreen';
import DrawerRight, { handleCartSideClose } from './components/DrawerRight';
import SearchScreen from './Screens/SearchScreen';
import EnOferta from './components/enlaces/EnOferta/EnOferta';
import compraExitosa from './components/correos/compraExitosa';
import RecuperarContraseña from './components/enlaces/RecuperarContraseña';
import ContrasenaOlvidada from './components/enlaces/ContrasenaOlvidada';



export const useCategoria = () =>{
  const [categorias,setCategorias]= React.useState("")

const abrasivos = () =>{
   setCategorias("abrasivos")
}
  return {categorias, abrasivos}
}

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
          {/* <NavBar2></NavBar2> */}
          <NavBar  handleDrawerOpen={handleDrawerOpen}/>
          <DrawerMenu handleDrawerClose={handleDrawerClose} open={open}  onClose={accionOpen}></DrawerMenu>
          <DrawerRight  handleCartSideClose={handleCartSideClose}  />

        </header>
        <Toolbar id="back-to-top-anchor" />

        <main >
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






          {/* categorias */}
         <Route exact path="/abrasivos" component={Abrasivos}/>
         <Route exact path="/accesorios-para-herramientas" component={AccesoriosDeHerramientas}/>
         <Route exact path="/amarres" component={Amarres}/>
         <Route exact path="/cerrajeria" component={Cerrajeria}/>
         <Route exact path="/construccion" component={Construccion}/>
         <Route exact path="/electricos" component={Electricos}/>
         <Route exact path="/fijaciones" component={Fijaciones}/>
         <Route exact path="/griferia-y-plomeria" component={Griferiayplomeria}/>
         <Route exact path="/pegantes-y-adhesivos" component={Pegantesyadhesivos}/>
         <Route exact path="/pinturas" component={Pinturas}/>
         <Route exact path="/herramientas-manuales" component={HerramientasManuales}/>


          {/* subcategorias */}
         <Route exact path="/Lijas-y-telas-recubiertas" component={LijasYtelasRecubiertas}/>
         <Route exact path="/discos-abrasivos" component={DiscosAbrasivos}/>
         <Route exact path="/discos-de-metal" component={DiscosDeMetal}/>
         <Route exact path="/amarres-plasticos" component={AmarresPlasticos}/>
         <Route exact path="/amarres-para-tejas" component={AmarresParaTejas}/>
         <Route exact path="/candados" component={Candados}/>
         <Route exact path="/cerraduras" component={Cerraduras}/>
         <Route exact path="/cerrojos" component={Cerrojos}/>
         <Route exact path="/cementos" component={Cementos}/>
         <Route exact path="/enchufes-y-clavijas" component={EnchufesYclavijas}/>
         <Route exact path="/tomas-e-interruptores" component={TomasEinterruptores}/>
         <Route exact path="/breakers" component={Breakers}/>
         <Route exact path="/cajas-y-electricos" component={CajasYelectricos}/>
         <Route exact path="/cintas" component={Cintas}/>
         <Route exact path="/plafones-y-rosetas" component={PlafonesYrosetas}/>
         <Route exact path="/pegantes-para-construccion" component={PegantesParaConstruccion}/>
         <Route exact path="/siliconas-y-selladores" component={SiliconasYselladores}/>
         <Route exact path="/herramientas-para-pintar" component={HerramientasParaPintar}/>
         <Route exact path="/tornillos" component={Tornillos}/>
         <Route exact path="/chazos-en-nylon" component={ChazosEnNylon}/>
         <Route exact path="/chazos-metalicos" component={ChazosMetalicos}/>
         <Route exact path="/soluciones-para-baños" component={SolucionesParaBaños}/>
         <Route exact path="/soluciones-para-cocinas" component={SolucionesParaCocinas}/>
         <Route exact path="/duchas" component={Duchas}/>
         <Route exact path="/jardin-y-exteriores" component={JardinYexteriores}/>
         <Route exact path="/griferia-lavamanos" component={GriferiaLavamanos}/>
         <Route exact path="/soluciones-para-el-hogar" component={SolucionesParaElHogar}/>
         <Route exact path="/albanileria-y-construccion" component={AlbanileriaYconstruccion}/>
         <Route exact path="/limas-y-escofinas" component={LimasYescofinas}/>
         <Route exact path="/herramientas-de-acabado" component={HerramientasDeAcabado}/>
         <Route exact path="/pinzas-y-alicates" component={PinzasYalicates}/>
         <Route exact path="/herramientas-manuales-de-corte" component={HerramientasManualesDeCorte}/>
         <Route exact path="/herramientas-de-medicion" component={HerramientasDeMedicion}/>
         <Route exact path="/destornilladores" component={Destornilladores}/>


         {/* marcas */}
         <Route exact path="/marcas" component={Marcas}/>


         <Route exact path="/ABRACOL" component={Abracol}/>
         <Route exact path="/CILES" component={Ciles}/>
         <Route exact path="/GRIVAL" component={Grival}/>
         <Route exact path="/NICHOLSON" component={Nicholson}/>
         <Route exact path="/RIOPLAST" component={Rioplast}/>
         <Route exact path="/SINTESOLDA" component={Sintesolda}/>
         <Route exact path="/GOYA" component={Goya}/>
         <Route exact path="/OSBLACK" component={Osblack}/>
         <Route exact path="/DEWALT" component={Dewalt}/>
         <Route exact path="/CODELCA" component={Codelca}/>
         <Route exact path="/UYUSTOOLS" component={Uyustools}/>
         <Route exact path="/SECURITY" component={Security}/>
         <Route exact path="/ARGOS" component={Argos}/>
         <Route exact path="/LUMINEX" component={Luminex}/>
         <Route exact path="/CRESCENT" component={Crescent}/>
         <Route exact path="/MULTIMARCA" component={Multimarca}/>
         <Route exact path="/EGRET" component={Egret}/>
         <Route exact path="/INDUMA" component={Induma}/>
         <Route exact path="/LUFKIN-CRESCENT" component={LufkinCrescent}/>
         <Route exact path="/MERCURY" component={Mercury}/>

          {/* ProductosTodos */}
         <Route exact path="/all" component={ProductosTodos}/>

         {/* en oferta */}
         <Route exact path="/ofertas" component={EnOferta}/>

         

         <Route exact path="/compraExitosa" component={compraExitosa}/>
         





     

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
