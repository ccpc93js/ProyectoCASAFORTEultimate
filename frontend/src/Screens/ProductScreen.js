import React, { useEffect, useState } from 'react';
import './ProductScreen.css'
import data from '../component/data.js'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import LoadingPageLogo from '../component/LoadingPageLogo';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { convertirAmoneda, detailsProduct } from '../actions/productActions';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function ProductScreen(props) {
    // const producto = data.productos.find((x)=>x._id === props.match.params.id)
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

//    slider function



//     const buttonPev = document.getElementById('button-prev')
//     const buttonNext = document.getElementById('button-next')
//     const slickList = document.getElementById('slick-list')
//     const track = document.getElementById('track')
//     const slick = document.querySelectorAll('.slick');

//     const slickWidth = ()=>  slick[0].offsetWidth;

//     buttonPev.onclick = () => Move(1)
//     buttonNext.onclick = () => Move(2)

//     const Move = (value)=>{

    
    
//     const trackWidth = track.offsetWidth;
//     const listWidth = slickList.offsetWidth;
//     let leftPosition = ""

//     track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

//     if(leftPosition < (trackWidth - listWidth)) {
//         track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
//     }else if(leftPosition > 0 && value ==1){
//         track.style.left = `${-1 + (leftPosition - slickWidth)}`
//     }

// }




    const datafiltrada = data.productos.filter((x)=>{
        if("abrasivos")
        return (x.categoria === "abrasivos")
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
        <div className="productScreen-image shadow-box-productos">
        <Link to="#">
        {loading && <LoadingBox/>}
        <img className=" " alt={producto.info} src={producto.imagen.img1} />
        </Link>
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
                                            <div className="row">
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
                                        
                                        </div>
                                    )
                                }
        
        </div>
        
        
        </div>
        <div className="clearfiproducto"></div>
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