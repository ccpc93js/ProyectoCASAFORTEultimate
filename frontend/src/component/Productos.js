import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filtrador from './Filtrador'
import './Productos.css'
import WidgetFilters from './WidgetFilters'
import data from './data.js'
// import LoadingBox from './LoadingBox'
import loadingPage from './LoadingPage'
import MessageBox from './MessageBox'
import {useDispatch, useSelector} from 'react-redux'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { listProducts } from '../actions/productActions'
import  DrawerFilter  from './DrawerFilter';




export default function Productos(props) {
    const [productos, setProducts]=useState([]);
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
                    setLoading(false);
                    setProducts(data);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fecthData();

        
       dispatch(listProducts());
    },[dispatch])
    
   

    // const productos =  data.productos
    let productFiltradoXProducto = productos.filter(x=>{
        if(props.categorias)
        return (x.categoria === props.categorias)
        if(props.subcategorias)
        return (x.subcategoria === props.subcategorias)
        if(props.marcas)
        return (x.marca === props.marcas)
        if(props.nuevos)
        return (x.createdAt)
    })

    const [dataFiltrada,setDataFiltrada]= React.useState(productFiltradoXProducto)
    const ordenar = (e) =>{
       let clasificacion = e.target.value;
        setDataFiltrada(productos.slice().sort((a,b)=>
        // clasificacion ===""? productos:
        clasificacion === "Ordenar por Nombre Ascendente" ?
        a.info > b.info ? 1:-1 : 
        clasificacion === "Ordenar por Nombre Descendente" ?
        a.info < b.info ? 1:-1 : 
        clasificacion === "Ordenar por _id Ascendente" ?
        a.codigo > b.codigo ? 1:-1 : 
        clasificacion === "Ordenar por _id Descendente" ?
        a.codigo < b.codigo ? 1:-1 : 
        clasificacion === "Ordenar por precio Ascendente" ?
        a.precio > b.precio ? 1:-1 : 
        clasificacion === "Ordenar por precio Descendente" ?
        a.precio < b.precio ? 1:-1 : productos

        

            
        ))
       
    }

    const [dataMarcas, setDataMarcas]=useState([]);


    const axiosDataMarcas = async () =>{
        const {data} = await axios.get('/api/productos/marcas/get');
        setDataMarcas(data);
    };
    axiosDataMarcas();

    const marcas = data.marcas.find(x=>x.nombre === (props.marcas)?props.marcas:"")

    // marcas.find(x=>x.nombre === (props.marcas)?props.marcas:"")
   
    
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
                        
                        <a href={props.categorias ? props.categorias : props.subcategorias ? props.subcategorias :props.marcas ? props.marcas:props.nuevos }>{props.categorias ? props.categorias.replace(/-/g," ") : props.subcategorias ? props.subcategorias.replace(/-/g," ") : props.marcas ? props.marcas.replace(/-/g," "):props.nuevos}</a>
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
                     dataFiltrada={dataFiltrada} 
                     productFiltradoXProducto={productFiltradoXProducto} 
                     productos={productos}
                     categorias={props.categorias}
                     subcategorias={props.subcategorias}
                     marcas={props.marcas}
                     nuevos={props.nuevos}
                   
                     
                     
                     />

                     
                 
                }
                </div>

                <div className="shop-layout__content">

                <Filtrador handleDrawerOpenFilter={handleDrawerOpenFilter} dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada} ordenar={ordenar} productFiltradoXProducto={productFiltradoXProducto} productos={productos}/>

   
                <div className="products-row  ">
                
                {
                        loading ? (
                        <loadingPage></loadingPage>
                        ): error ?(
                        <MessageBox variant="danger">{error}</MessageBox>
                        ):(
                            
                        
                        

                            productFiltradoXProducto.map(x =>(
                <div className="products-list-item">
                <div key={x.categoria} className="product-card  shadow-box-productos">
                <div className="product-image">
                <a href={`/producto/${x._id}`} className="product-image__body ">
               {loading?  <loadingPage></loadingPage> : <img className="product-image__img imgnormal lazy loaded" alt={x.info} src={x.imagen.img1}/>}
                </a>
                </div>
                <div className="product-card__info">
                <div className="product-card__name">
                <a href={`/producto${x._id}`}><p>{x.info}</p></a>
                </div>
                </div>
                <div className="product-card-body">
                <div className="product-card__specifications float-left">
                <strong>CÓDIGO: </strong>{x.codigo}<br/>
                <strong>UNIDAD: </strong>{x.unidad}<br/>
                </div>
                <div className="clearfix"></div>
                </div>
                </div>
                </div>
                
    
                ))
                        )
               }
               </div>
                </div>

            </div>
        </div>

        
    )
}
