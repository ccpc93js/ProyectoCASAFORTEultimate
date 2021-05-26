import React, { useState } from 'react'

import { Footer } from './component/Footer';
import { HomeScreen } from './component/HomeScreen';
import { NavBar } from './component/NavBar';
// import NavBar2  from './component/NavBar2';
import { Nosotros } from './component/enlaces/Nosotros';
import { BrowserRouter, Route,  } from "react-router-dom";
import  DrawerMenu  from './component/DrawerMenu';
import  DrawerFilter  from './component/DrawerFilter';
import LoadingPageLogo from './component/LoadingPageLogo'
import Whatsapp from './component/Whatsapp'
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Toolbar from "@material-ui/core/Toolbar";






// import data from '../data.js'


import PrivateRoute from './component/PrivateRoute'
import AdminRoute from './component/AdminRoute';


import Productos from './component/Productos';
import ProductosTodos from './component/enlaces/Productos/ProductosTodos';
import Marcas from './component/Marcas'



import Abrasivos from './component/enlaces/Categorias/Abrasivos'
import AccesoriosDeHerramientas from './component/enlaces/Categorias/AccesoriosDeHerramientas'
import Amarres from './component/enlaces/Categorias/Amarres'
import Cerrajeria from './component/enlaces/Categorias/Cerrajeria'
import Construccion from './component/enlaces/Categorias/Construccion'
import Electricos from './component/enlaces/Categorias/Electricos'
import Griferiayplomeria from './component/enlaces/Categorias/Griferiayplomeria'
import Pegantesyadhesivos from './component/enlaces/Categorias/Pegantesyadhesivos'
import Pinturas from './component/enlaces/Categorias/Pinturas'


import Abracol from './component/enlaces/Marcas/Abracol'
import Ciles from './component/enlaces/Marcas/Ciles'
import Grival from './component/enlaces/Marcas/Grival'
import Nicholson from './component/enlaces/Marcas/Nicholson'
import Rioplast from './component/enlaces/Marcas/Rioplast'
import Sintesolda from './component/enlaces/Marcas/Sintesolda'
import Goya from './component/enlaces/Marcas/Goya'
import Osblack from './component/enlaces/Marcas/Osblack'
import Dewalt from './component/enlaces/Marcas/Dewalt'
import Pegadit from './component/enlaces/Marcas/Pegadit'
import Codelca from './component/enlaces/Marcas/Codelca'
import Uyustools from './component/enlaces/Marcas/Uyustools'
import Segurity from './component/enlaces/Marcas/Segurity'
import Argos from './component/enlaces/Marcas/Argos'
import FMT from './component/enlaces/Marcas/FMT'

import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import Fijaciones from './component/enlaces/Categorias/Fijaciones';
import Contactenos from './component/enlaces/Contactenos';
import ZonaClientes from './component/enlaces/ZonaClientes';
import Registrarse from './component/enlaces/Registrarse';
import LoginRegistro from './component/enlaces/LoginRegistro';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LijasYtelasRecubiertas from './component/enlaces/subCategorias/LijasYtelasRecubiertas';
import DiscosAbrasivos from './component/enlaces/subCategorias/DiscosAbrasivos';
import DiscosDeMetal from './component/enlaces/subCategorias/DiscosDeMetal';
import AmarresPlasticos from './component/enlaces/subCategorias/AmarresPlasticos';
import AmarresParaTejas from './component/enlaces/subCategorias/AmarresParaTejas';
import Candados from './component/enlaces/subCategorias/Candados';
import Cerraduras from './component/enlaces/subCategorias/Cerraduras';
import Cerrojos from './component/enlaces/subCategorias/Cerrojos';
import Cementos from './component/enlaces/subCategorias/Cementos';
import EnchufesYclavijas from './component/enlaces/subCategorias/EnchufesYclavijas';
import TomasEinterruptores from './component/enlaces/subCategorias/TomasEinterruptores';
import Breakers from './component/enlaces/subCategorias/Breakers';
import CajasYelectricos from './component/enlaces/subCategorias/CajasYelectricos';
import Cintas from './component/enlaces/subCategorias/Cintas';
import PlafonesYrosetas from './component/enlaces/subCategorias/PlafonesYrosetas';
import PegantesParaConstruccion from './component/enlaces/subCategorias/PegantesPraraConstruccion';
import SiliconasYselladores from './component/enlaces/subCategorias/SIliconasYselladores';
import HerramientasParaPintar from './component/enlaces/subCategorias/HerramientasParaPintar';
import Tornillos from './component/enlaces/subCategorias/Tornillos';
import ChazosEnNylon from './component/enlaces/subCategorias/ChazosEnNylon';
import ChazosMetalicos from './component/enlaces/subCategorias/ChazosMetalicos';
import SolucionesParaBaños from './component/enlaces/subCategorias/SolucionesParaBaños';
import SolucionesParaCocinas from './component/enlaces/subCategorias/SolucionesParaCocinas';
import Duchas from './component/enlaces/subCategorias/Duchas';
import JardinYexteriores from './component/enlaces/subCategorias/JardinYexteriores';
import GriferiaLavamanos from './component/enlaces/subCategorias/GriferiaLavamanos';
import SolucionesParaElHogar from './component/enlaces/subCategorias/SolucionesParaElHogar';
import AlbanileriaYconstruccion from './component/enlaces/subCategorias/AlbanileriaYconstruccion';
import LimasYescofinas from './component/enlaces/subCategorias/LimasYescofinas';
import HerramientasDeAcabado from './component/enlaces/subCategorias/HerramientasDeAcabado';
import PinzasYalicates from './component/enlaces/subCategorias/PinzasYalicates';
import HerramientasManualesDeCorte from './component/enlaces/subCategorias/HerramientasManualesDeCorte';
import HerramientasDeMedicion from './component/enlaces/subCategorias/HerramientasDeMedicion';
import Destornilladores from './component/enlaces/subCategorias/Destornilladores';


import ProductEditScreen from './Screens/ProductEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import OrderListScreen from './Screens/OrderListScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import Luminex from './component/enlaces/Marcas/Luminex';
import Crescent from './component/enlaces/Marcas/Crescent';
import Multimarca from './component/enlaces/Marcas/Multimarca';
import Egret from './component/enlaces/Marcas/Egret';
import Induma from './component/enlaces/Marcas/Induma';
import HerramientasManuales from './component/enlaces/Categorias/HerramientasManuales';
import UserListRegisteredScreen from './Screens/UserListRegisteredScreen';
import MensajeRegistrado from './component/enlaces/MensajeRegistrado';
import LufkinCrescent from './component/enlaces/Marcas/LufkinCrescent';
import DashboardScreen from './Screens/DashboardScreen';
import DrawerRight from './component/DrawerRight';
import SearchScreen from './Screens/SearchScreen';


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
  },1000)

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



  
  if (loading){
    return (
    <LoadingPageLogo className="loading-logo"></LoadingPageLogo>

    )
  }else{

  return (
    
    <BrowserRouter>


    <div className="grid-container">
      <Whatsapp/>
  
        <header  >
          {/* <NavBar2></NavBar2> */}
          <NavBar  handleDrawerOpen={handleDrawerOpen}/>
          <DrawerMenu handleDrawerClose={handleDrawerClose} open={open}  onClose={accionOpen}></DrawerMenu>
        </header>
        <Toolbar id="back-to-top-anchor" />

        <main >
          <Route
            path="/search/:productSearched?"
            component={SearchScreen}
            exact
          ></Route>

        <Route exact path="/cart/:id?" component={CartScreen}/>
        <Route exact path="/producto/:id" component={ProductScreen}/>
        <Route
            path="/producto/:id/edit"
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
         <Route exact path="/PEGADIT" component={Pegadit}/>
         <Route exact path="/CODELCA" component={Codelca}/>
         <Route exact path="/UYUSTOOLS" component={Uyustools}/>
         <Route exact path="/SEGURITY" component={Segurity}/>
         <Route exact path="/ARGOS" component={Argos}/>
         <Route exact path="/LUMINEX" component={Luminex}/>
         <Route exact path="/CRESCENT" component={Crescent}/>
         <Route exact path="/FMT" component={FMT}/>
         <Route exact path="/MULTIMARCA" component={Multimarca}/>
         <Route exact path="/EGRET" component={Egret}/>
         <Route exact path="/INDUMA" component={Induma}/>
         <Route exact path="/LUFKIN-CRESCENT" component={LufkinCrescent}/>

          {/* ProductosTodos */}
         <Route exact path="/all" component={ProductosTodos}/>
         

         





     

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
