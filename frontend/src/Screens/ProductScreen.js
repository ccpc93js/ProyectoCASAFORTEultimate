import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'

import './ProductScreen.css'
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import formatCurrency, {  detailsProduct } from '../actions/productActions';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { $porcentajeEmpresa, $porcentajePersona } from '../components/Productos';
import ProductosRelacionados from '../components/ProductosRelacionados';
import PrecioClient from '../components/PrecioClient';


// import YouTubeIcon from '@material-ui/icons/YouTube';


function ProductScreen(props) {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, producto} = productDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;


 
    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch, productId]);


    // if(!producto){
    //     return ( 
    //     <MessageBox variant="danger">Producto no encontrado</MessageBox>
    //     )
    // }
   const addToCartHandler =() =>{
       props.history.push(`/cart/${producto._id || productId}?qty=${qty}`)
   }
       const title = producto ? producto.info : ''


   if (loading) {
   <Helmet>
     <title>Cargando...</title>
   </Helmet>
    }


    return (
        <>
        {
            !loading ? 
            <Helmet>
                <title>{title} </title>
                <meta name="description" content={title}/>
                <meta name="rating" content="General"/>
            </Helmet>
            :''
        }
            
            <div className="container-productScreen">

                {
    loading ? (
        <div className="loading-div">
          <LoadingBox/>
        </div>
    ):error ?(
        <MessageBox variant="danger">{error}</MessageBox>
    ):(
        
        <div className="productScreen-row">
                <div className="page-header">
                    <div className="page-header__container container">
                    <div className="page-header__breadcrumb">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="/">Inicio</a>
                    {/* <svg className="breadcrumb-arrow" >
                    <ArrowForwardIosIcon/>
                    </svg> */}
                    </li>

                    <li className="breadcrumb-item">
                    <a href={`/categorias/${producto.categoria}`}>{producto.categoria.replace(/-/g," ")}</a>
                    <svg className="breadcrumb-arrow" >
                    <ArrowForwardIosIcon/>
                    </svg>
                    </li>
                    
                    <li className="breadcrumb-item info-ps">
                        {
                            producto.info
                        }
                    <svg className="breadcrumb-arrow">
                    <ArrowForwardIosIcon/>
                    </svg>
                    </li>
                    </ol>
                    </nav>
                    </div>
                    </div>
                </div>
    
        <div className="productScreen-list-item ">
        <div key={producto._id} className="productScreen-card  ">
        <div className="productScreen-image ">
        {
          (producto.enOferta === true)?
         ( 
            <div  className="producto-en-oferta">
              <p className="porcentaje">{producto.descuento}%</p>
              <p className="DCTO">DCTO</p>
            </div>
          )
          :
          (
              ""  
          )
        }
    
          <img className=" " alt={producto.info} src={producto.imagen} />
     
        </div>
       
        <div className="productScreen-card-body ">
        
        <div className="info">
            <h1>{producto.info}</h1>      
        </div>
        <div className="_id">
        <div className="codigo">
        <strong>CÓDIGO: </strong>{producto.codigo}<br/>
        <strong>UNIDAD: </strong>{producto.unidad}<br/>
        </div>
        {
            // (!userInfo) ? ("Para comprar debes registrarte") :
            producto.enStock > 0 ? (
                <div>         
                     {

                         userInfo?
                         (producto.enOferta === true) ? 
                        (
                            <div className="precio">
                                <strong >PRECIO: </strong>{formatCurrency(PrecioClient(producto.precio, userInfo.tipoClient))}<br/>
                                <strong >OFERTA: </strong>{formatCurrency(PrecioClient(producto.precioDeOferta, userInfo.tipoClient))}<br/>
                            </div>

                        )
                         :
                         (
                            <div className="precio">                       
                                <strong >PRECIO: </strong>{formatCurrency(PrecioClient(producto.precio, userInfo.tipoClient))}<br/>
                            </div>
                         )

                         :

                         (producto.enOferta === true) ? 
                         (
                             <div className="precio">
                                 <strong >PRECIO: </strong>{formatCurrency(PrecioClient(producto.precio, userInfo.tipoClient))}<br/>
                                 <strong >OFERTA: </strong>{formatCurrency(PrecioClient(producto.precioDeOferta, userInfo.tipoClient))}<br/>
                             </div>
 
                         )
                          :
                          (
                             <div className="precio">                       
                                 <strong >PRECIO: </strong>{formatCurrency(producto.precio + (producto.precio * $porcentajePersona))}<br/>
                             </div>
                          )

                     }
                                        <li>
                                            <div className="productScreen-card__row">
                                                <div className="codigo">
                                                    Cantidad
                                                </div>
                                                <div>
                                                    <select value={qty} onChange={e => setQty(e.target.value)}>
                                                        {
                                                            [...Array(producto.enStock).keys()].map(
                                                                (x) =>(
                                                                <option key={x+1} value={x + 1}>{x+1}</option>
                                                            )
                                                        )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                                <button 
                                                onClick={addToCartHandler}
                                                 className=" block button" 
                                                 >
                                                 Agregar a carrito
                                                 </button>
                                        </li>
                                        <li>
                                        <div className="social-PS">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#"><i className=""><FacebookIcon/></i></a>
                                            <a href="https://www.instagram.com/casaforte.co/" target="_BLANK" rel="noreferrer"><i className=""><InstagramIcon/></i></a>
                                            <a href="https://api.whatsapp.com/send?phone=++573046486898&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."><i className=""><WhatsAppIcon/></i></a>

                                        </div>
                                        </li>
                                        
                                        </div>
                                    ): (<h2 style={{color: "red", fontSize:"20px"}}>Producto agotado!</h2>)
                                }
        </div>     
        </div>
        <div className="clearfiproducto"></div>
        </div>
        </div>

        <ProductosRelacionados 
            producto={producto}
            userInfo={userInfo}
        />

       </div>
   
    )
}
            </div>
        
    </>
    )

}

export default ProductScreen

