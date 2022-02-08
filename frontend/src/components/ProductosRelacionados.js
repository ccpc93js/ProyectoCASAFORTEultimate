import React, { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux';

import { listProducts } from '../actions/productActions';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Spinner from '../components/Spinner/index';
import Fade from 'react-reveal/Fade';

import ProductoRelacionado from './ProductoRelacionado';


export default function ProductosRelacionados({producto,userInfo}) {

    const productList = useSelector((state) => state.productList)
    const { loading:loadingP, error:errorP, productos } = productList;
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts([]));
      }, [dispatch])


      const productFiltradoXcategoria = () =>{
   
        if(!loadingP) {
             if(errorP){
                 console.log("error al cargar los productos")
             }
              const productosFilter =  productos.filter(x=>{
                if(producto)
                return (x.categoria === producto.categoria)
                
                return productos
             })
             
             return productosFilter
         }
        }

    const Next = () =>{
        const sliderMarcas = document.getElementById("sliderPR");
        let sliderSectionFirst = document.querySelectorAll(".slider-section-PR")[0];
        sliderMarcas.style.marginLeft = "-620.56px";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(()=>{
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("beforeend", sliderSectionFirst)
            sliderMarcas.style.marginLeft = "-259.78px";
        },500);
    
    
    }
    
    const Prev = () =>{
        const sliderMarcas = document.getElementById("sliderPR");
        let sliderSection = document.querySelectorAll(".slider-section-PR");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
        sliderMarcas.style.marginLeft = "0";
        sliderMarcas.style.transition = "all 0.5s ease"
        setTimeout(()=>{
            sliderMarcas.style.transition = "none";
            sliderMarcas.insertAdjacentElement("afterbegin", sliderSectionLast)
            sliderMarcas.style.marginLeft = "-259.78px";
        },500);
    
    
    }
    return (
        <div className="continerPR">

        <h2 className="continerPR__title"><div className="continerPR__title__divider"></div> Productos relacionados <div className="continerPR__title__divider"></div></h2>
   <div className="continerPR__carousel">
   
   {
   
       loadingP ? (
            <Spinner />
           ) : (
           
   <div className="continerPR__centralPR" id="sliderPR">  
           <div 
           className="hi-prev-PR" 
           id="arrow-prev"
           onClick={Prev}
           >
               <i>
                <ChevronLeftIcon/>
               </i> 
               
           </div>
               {
                   productFiltradoXcategoria().map((x)=>(
           <Fade key={x._id} bottom cascade={true}>
                       <ul className="continerPR__productos-relacionados slider-section-PR" >               
                           {                                       
                               <ProductoRelacionado producto={x} userInfo={userInfo}/>    
                           }
                       </ul>
           </Fade>      
                       )
                   )
               }
           <div 
             className="hi-next-PR"          
             id="arrow-next"
             onClick={Next}
             
             >
               <i>
   
               <ChevronRightIcon/>
               </i>
           </div>
           
   
   
   </div>
           )
   }
   </div> 
   
   
   </div>
    )
}
