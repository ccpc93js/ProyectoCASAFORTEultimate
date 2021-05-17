import React, { useEffect, useState } from 'react';
import './ProductScreen.css'
// import data from '../component/data.js'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LoadingPageLogo from '../component/LoadingPageLogo';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { convertirAmoneda, detailsProduct } from '../actions/productActions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

// import YouTubeIcon from '@material-ui/icons/YouTube';



function ProductScreen(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, producto} = productDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [productos, setProductos] = useState([]);
    const [loadingP, setLoadingP] = useState(false);
    const [errorP, setErrorP] = useState(false);
    

    console.log(productos)
    console.log(producto)

 
    useEffect(()=>{
        dispatch(detailsProduct(productId));
        const fecthData = async () =>{
            try{
                
                setLoadingP(true);
        
                    const {data} = await axios.get('/api/productos');
                    console.log(data)

                    // const productFiltradoXProducto = data.filter(x=>{
                    //     if(producto)
                    //     return (x === producto)


                    // })
                    setLoadingP(false);
                    setProductos(data);

                 
            }catch(error){
                setErrorP(error.message);
                setLoadingP(false);
            }
        };
        fecthData();


    },[dispatch, productId]);
    // if(!producto){
    //     return ( 
    //     <MessageBox variant="danger">Producto no encontrado</MessageBox>
    //     )
    // }
   const addToCartHandler =() =>{
       props.history.push(`/cart/${producto._id || productId}?qty=${qty}`)
   }



   const productFiltradoXcategoria = productos.filter(x=>{
    if(producto)
    return (x.categoria === producto.categoria)


})



  

    return (
            <div className="container-productScreen">

                {
    loading ? (
        <div className="loading-div">
          <LoadingBox/>
        </div>
    ):error ?(
        <MessageBox variant="danger">{error}</MessageBox>
    ):(
        
        <div className="productScreen-row  ">
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
                    <a href={`/${producto.categoria}`}>{producto.categoria.replace(/-/g," ")}</a>
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
    
        {loading && <LoadingBox/>}
        <img className=" " alt={producto.info} src={producto.imagen.img1} />
     
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
            (!userInfo) ? ("Para comprar debes registrarte") :
            producto.enStock > 0 && (
                <div>
                    <div className="precio">
                      <strong >PRECIO: </strong>${convertirAmoneda(producto.precio, "COP")}<br/>
                    </div>
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
                                            <a href="#"><i className=""><FacebookIcon/></i></a>
                                            <a href="https://www.instagram.com/casaforte.co/" target="_BLANK"><i className=""><InstagramIcon/></i></a>
                                            <a href="https://api.whatsapp.com/send?phone=++573046486898&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."><i className=""><WhatsAppIcon/></i></a>

                                        </div>
                                        </li>
                                        
                                        </div>
                                    )
                                }
        
        </div>
        
        
        </div>
        <div className="clearfiproducto"></div>
        </div>
        </div>

           

 <div className="continerPR">

     <h2 className="continerPR__title"><div className="continerPR__title__divider"></div> Productos relacionados <div className="continerPR__title__divider"></div></h2>

<div className="continerPR__centralPR">   

{

loadingP?(
<LoadingBox/>
):errorP ?(
    <MessageBox variant="danger">{errorP}</MessageBox>
):(

    
    productFiltradoXcategoria.map((x)=>(


//  <ul className="marca">
//      <li><a href="/abracol"><img class="marca" src="./img/Icons/Logo_Abracol.png" alt="abracol"/></a></li>
//  </ul>


 <ul className="continerPR__productos-relacionados">
<li>
    <a href={`/producto/${x._id}`}>
        <div className="continerPR__productos-relacionados__img">
            <img src={x.imagen.img1} alt={x.info} />
        </div>
    <div className="continerPR__details">
     <p className="continerPR__details__description__info">{x.info}</p>
     <p className="continerPR__details__description__precio">${convertirAmoneda(producto.precio, "COP")}</p>
    </div>

    </a>

</li>
 </ul>


))

)


}

</div>

</div>



        
        

      
       </div>
   
    )
}


 

        
          
            </div>
        
    )
}

export default ProductScreen



// <div className="carrusel-container">
// <h2>Productos relacionados</h2>
// <div className="slick-list" id="slick-list">
// <button className="slick-arrow slick-prev" id="button-prev">
// <ArrowBackIosIcon/>
// </button>
// <div className="slick-track" id="track">
// {

// datafiltrada.map((x)=>(


// <div className="slick">
// <div className="">
//     <a href={`/producto/${x.codigo}`}>
//     <picture>
//        <img src={x.imagen.img1} alt={x.info} className=""/>
//    </picture>
//     <div className="details">
// <p className="description">{x.info}</p>

      
//     </div>
//     </a>
// </div>

//     </div>
// ))


// }
        

// </div>
// <button className="slick-arrow slick-next" id="button-next">
// <ArrowForwardIosIcon/>
// </button>

// </div>


// </div> 