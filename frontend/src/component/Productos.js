import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filtrador from './Filtrador'
import './Productos.css'
import WidgetFilters from './WidgetFilters'
import data from './data.js'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import {useDispatch, useSelector} from 'react-redux'
import Fade from 'react-reveal/Fade';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import formatCurrency, { convertirAmoneda, listProducts } from '../actions/productActions'
import  DrawerFilter  from './DrawerFilter';
import { addToCart } from '../actions/cartActions'
import { handleCartSideClose, handleCartSideOpen } from './DrawerRight'




export default function Productos(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [productos, setProductos] = useState([]);
    const [totalProductos, setTotalProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch()
    // const productList = useSelector((state)=>state.productList)
    // const {loading, error, productos} = productList;
    const [openFilter, setOpenFilter] = React.useState(false);

    const handleDrawerOpenFilter = () => {
      setOpenFilter(true);
    };
    const handleDrawerCloseFilter = () => {
      setOpenFilter(false);
    };
  
    const accionOpenFilter =()=>{
      setOpenFilter(!openFilter)
    }



    useEffect(()=>{
        const fecthData = async () =>{
            try{
                
                setLoading(true);
        
                    const {data} = await axios.get('/api/productos');
                    const productFiltradoXProducto = data.filter(x=>{
                        if(props.categorias)
                        return (x.categoria === props.categorias)
                        if(props.subcategorias)
                        return (x.subcategoria === props.subcategorias)
                        if(props.marcas)
                        return (x.marca === props.marcas)
                        if(props.all)
                        return (x.createdAt)
                        if(props.enOferta){
                          return (x.enOferta === true)
                        }
                    }).sort((a,b)=> a.createdAt < b.createdAt? 1:-1)
                    setLoading(false);
                    setProductos(productFiltradoXProducto);
                    setTotalProductos(data)
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fecthData();

        
      //  dispatch(listProducts());
    },[/*dispatch*/])
    
   


    const ordenar = (e) =>{
       let clasificacion = e.target.value;
       setProductos(productos.slice().sort((a,b)=>
        // clasificacion ===""? productos:
        clasificacion === "Ordenar por Nombre Ascendente" ?
        a.info > b.info ? 1:-1 : 
        clasificacion === "Ordenar por Nombre Descendente" ?
        a.info < b.info ? 1:-1 : 
        clasificacion === "Ordenar por Codigo Ascendente" ?
        a.codigo > b.codigo ? 1:-1 : 
        clasificacion === "Ordenar por Codigo Descendente" ?
        a.codigo < b.codigo ? 1:-1 : 
        clasificacion === "Ordenar por Precio Ascendente" ?
        a.precio > b.precio ? 1:-1 : 
        clasificacion === "Ordenar por Precio Descendente" ?
        a.precio < b.precio ? 1:-1 : 0

        

            
        ))
       
    }

    // const [dataMarcas, setDataMarcas]=useState([]);


    // const axiosDataMarcas = async () =>{
    //     const {data} = await axios.get('/api/productos/marcas/get');
    //     setDataMarcas(data);
    // };
    // axiosDataMarcas();

    const marcas = data.marcas.find(x=>x.nombre === (props.marcas)?props.marcas:"")

    // marcas.find(x=>x.nombre === (props.marcas)?props.marcas:"")
   
    const handleAddCart = (id) =>{
        dispatch(addToCart(id, 1))
    }


    const [cartSideOpen, setCartSideOpen] = useState(false)

  //   const handleCartSideOpen = () =>{
  //     const Carrito = document.querySelector(".Carrito");
  //     Carrito.style.marginRight = "-30px";
  //     Carrito.style.visibility = "visible"
  //     Carrito.style.opacity = "1";
      

  //  }
  //  const handleCartSideClose = () =>{
  //      const Carrito = document.querySelector(".Carrito");
  //      Carrito.style.visibility = "hidden"
  //      Carrito.style.opacity = "0";
  //  }

   const CartSideaccionOpen =()=>{
    setCartSideOpen(!cartSideOpen)
  }
    
    return (
        <div className="productos-container">
          <DrawerFilter handleDrawerClose={handleDrawerCloseFilter} open={openFilter}  onClose={accionOpenFilter}></DrawerFilter>

             <div className="page-header">
                    <div className="page-header__container container">
                    <div className="page-header__breadcrumb">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="/">Inicio</a>
                    <svg className="breadcrumb-arrow" >
                    <ArrowBackIosIcon/>
                    </svg>
                    </li>
                    <li className="breadcrumb-item">
                    {
                        
                        <a href={`/${props.categorias ? props.categorias : props.subcategorias ? props.subcategorias :props.marcas ? props.marcas:props.all}`}>{props.categorias ? props.categorias.replace(/-/g," ") : props.subcategorias ? props.subcategorias.replace(/-/g," ") : props.marcas ? props.marcas.replace(/-/g," "):"todos"}</a>
                    }
                    <svg className="breadcrumb-arrow">
                    <ArrowBackIosIcon/>
                    </svg>
                    </li>
                    </ol>
                    </nav>
                    </div>
                    </div>
                </div>
            <div className="shop-layout">
          

                <div className="shop-layout__sidebar">
                  {  (props.marcas)?(
                    <div className="sidebar_brand shadow-box-productos">
                        <img src={marcas.img}/>
                    </div>):("")
                  }
                { 
                    
                    
                   
                    <WidgetFilters
                     productos={productos}
                     categorias={props.categorias}
                     subcategorias={props.subcategorias}
                     marcas={props.marcas}
                     nuevos={props.nuevos}
                   
                     
                     
                     />

                     
                 
                }
                </div>

                <div className="shop-layout__content">

                <Filtrador handleDrawerOpenFilter={handleDrawerOpenFilter}   ordenar={ordenar} totalProductos={totalProductos} productos={productos}/>

   
                 <Fade bottom cascade={true}>
                <div className="products-row  ">

                
                {
                        loading ? (
                            <div className="loading-div">
                                <LoadingBox/>
                             </div>
                        ): error ?(
                        <MessageBox variant="danger">{error}</MessageBox>
                        ):(
                            
                        productos.length === 0 ? 

                        (
                          <div style={{textAlign: "center", margin: "20px", alignItems: "center"}}>
                            <h1 style={{fontSize: "20px"}}> No hay productos en esta seccion por el momento!</h1>
                          </div>
                        ): 
                        

                          productos.map(x =>(
                <div key={x._id} className="product-card  ">
                <div className="product-image">
                  {
                    (x.enOferta === true)?
                   ( 
                      <div  className="producto-en-oferta">
                        <p className="porcentaje">{x.descuento}%</p>
                        <p className="DCTO">DCTO</p>
                      </div>
                    )
                    :
                    (
                        ""  
                    )
                  }
                <a

                href={`/producto/${x._id}/${x.info.replace(/ /g,"-")}`} className="product-image__body ">
                 <img className="product-image__img imgnormalP " alt={x.info} src={x.imagen}/>
              
                </a>
                {userInfo?

                 <div 
                 aria-label="agregar a carrito"
                 className="addCart" 
                 onClick={
                    ()=>{
                        // console.log(e)
                        handleCartSideOpen()
                        handleAddCart(x._id)
     
                    }
                    }>
                        <i><ShoppingCartIcon/></i>
                 </div>
                 : ""}
                </div>
                <div className="product-card__info">
                <a href={`/producto/${x._id}/${x.info.replace(/ /g,"-")}`}><p>{x.info}</p></a>
                </div>
                <div className="product-card-body">
                {/* <strong>CÓDIGO: </strong>{x.codigo}<br/>
                <strong>UNIDAD: </strong>{x.unidad}<br/> */}
                {/* <strong>PRECIO: </strong>${convertirAmoneda(x.precio , "COP")}<br/> */}
                
                {
                  userInfo?
                
                (x.enOferta ===false)?(
                  <p>{formatCurrency(userInfo.tipoClient === "Empresa"? x.precio + (x.precio * 0.20):userInfo.tipoClient === "Persona"? x.precio + (x.precio * 0.30): x.precio)}</p>
                ):(
                  <div className="producto-en-oferta_precio">
                   <p className="p1"> {formatCurrency(userInfo.tipoClient === "Empresa"? x.precio + (x.precio * 0.20):userInfo.tipoClient === "Persona"? x.precio + (x.precio * 0.30): x.precio)}</p>
                    {/* <br></br> */}
                    <p className="p2"> {formatCurrency(userInfo.tipoClient === "Empresa"? x.precio + (x.precio * 0.20):userInfo.tipoClient === "Persona"? x.precioDeOferta + (x.precioDeOferta * 0.30): x.precioDeOferta)}</p>

                  </div>
                  
                  )
                  : ("")
                }
                </div>
                </div>
                
    
                ))
                        )
               }

               </div>
               </Fade>
                </div>

            </div>
        </div>

        
    )
}
