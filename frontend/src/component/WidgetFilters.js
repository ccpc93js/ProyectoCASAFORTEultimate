import React, { useState } from 'react'
import './WidgetFilters.css'
import axios from 'axios'
import data from './data.js'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarsIcon from '@material-ui/icons/Stars';

function WidgetFilters(props) {
    const [dataCategorias, setDataCategorias]=useState([]);
    const [dataSubcategorias, setDataSubcategorias]=useState([]);
    const [dataMarcas, setDataMarcas]=useState([]);

    const axiosDataCategorias = async () =>{

        const {data} = await axios.get('/api/productos/categorias/get');
        setDataCategorias(data);

    
    };
    axiosDataCategorias();

    const axiosDataSubcategorias = async () =>{   
        const {data} = await axios.get('/api/productos/subcategorias/get');
        setDataSubcategorias(data);  
    };
    axiosDataSubcategorias();
    
    const axiosDataMarcas = async () =>{
        const {data} = await axios.get('/api/productos/marcas/get');
        setDataMarcas(data);
    };
    axiosDataMarcas();



    const subcategorias = dataSubcategorias
    let productFiltradoXProducto = subcategorias.filter((x) =>{
        if(props.categorias)
        return (x.categoria === props.categorias)
        if(props.subcategorias)
        return (x.subcategoria === props.categorias) 
        if(props.marcas)
        return (x.marca === props.categorias)  
     })
     const marcas = dataMarcas
     let productFiltradoXMarca = marcas.filter((x) =>{
        if(props.categorias)
        return (x.categoria.find(x=>x===props.categorias ) === props.categorias)
        // return (x.categoria[1] === props.categorias)
        if(props.subcategorias)
        return (x.subcategoria.find(x=>x===props.categorias ) === props.categorias)  
     })

     const categorias = dataCategorias


    //  const submithandler =(e)=>{

    //  }

    const nombreWidgetFilters=()=>{
        if (props.categorias)
            return  (props.categorias.replace(/-/g," "))
        if (props.subcategorias)
            return (props.subcategorias.replace(/-/g," "))
        if (props.marcas)
            return (props.marcas.replace(/-/g," "))
        if (props.nuevos)
            return (props.nuevos)
    }
   
    return (
        <div className="block-sidebar ">
        {
            <div className=" block block-sidebar__body">
                <div className="block-sidebar__item">
                <div class="widget-filters widget widget-filters--offcanvas--mobile" data-collapse="" data-collapse-opened-class="filter--opened">
<h4 class="widget-filters__title widget__title">
{
    nombreWidgetFilters()
    
}
</h4>
{

    
    (props.categorias || props.subcategorias)?(
<div class="widget-filters__list ">
<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">


<button type="button" class="filter__title" data-collapse-trigger="">
Subcategorias
<svg class="filter__arrow" width="12px" height="7px">
    <ExpandLessIcon/>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-categories">
<ul class="filter-categories__list">
{
    productFiltradoXProducto.map(x=>
     <li class="filter-categories__item filter-categories__item--parent">
    <svg class="filter-categories__arrow" >
        <StarsIcon/>
    </svg>
    <a data-id="3" href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
    </li>
        )
    
}
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">
<button type="button" class="filter__title" data-collapse-trigger="">
Marcas
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-list">
{
    productFiltradoXMarca.map(x=>
<div class="filter-list__list">
<label class="filter-list__item ">
<span class="filter-list__title">
<a href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
</span>
</label>

</div>
    )
}
</div>
</div>
</div>
</div>
</div>
</div>
    ):(props.marcas)?(
        <div class="widget-filters__list">
<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">


<button type="button" class="filter__title" data-collapse-trigger="">
Categorias
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-categories">
<ul class="filter-categories__list">
{
    categorias.map(x=>
     <li class="filter-categories__item filter-categories__item--parent">
    <svg class="filter-categories__arrow">
        <StarsIcon/>
    </svg>
    <a data-id="3" href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
    </li>
        )
    
}
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">
<button type="button" class="filter__title" data-collapse-trigger="">
Subcategorias
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-categories">
<ul class="filter-categories__list">
{
    subcategorias.map(x=>
     <li class="filter-categories__item filter-categories__item--parent">
    <svg class="filter-categories__arrow">
        <StarsIcon/>
    </svg>
    <a data-id="3" href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
    </li>
        )
    
}
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

    ):(
<div class="widget-filters__list">
<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">


<button type="button" class="filter__title" data-collapse-trigger="">
Categorias
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-categories">
<ul class="filter-categories__list">
{
    categorias.map(x=>
     <li class="filter-categories__item filter-categories__item--parent">
    <svg class="filter-categories__arrow">
        <StarsIcon/>
    </svg>
    <a data-id="3" href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
    </li>
        )
    
}
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">
<button type="button" class="filter__title" data-collapse-trigger="">
Subcategorias
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-categories">
<ul class="filter-categories__list">
{
    subcategorias.map(x=>
     <li class="filter-categories__item filter-categories__item--parent">
    <svg class="filter-categories__arrow">
        <StarsIcon/>
    </svg>
    <a data-id="3" href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
    </li>
        )
    
}
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="widget-filters__item">
<div class="filter filter--opened" data-collapse-item="">
<button type="button" class="filter__title" data-collapse-trigger="">
Marcas
<svg class="filter__arrow" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div class="filter__body" data-collapse-content="">
<div class="filter__container">
<div class="filter-list">
{
    marcas.map(x=>
<div class="filter-list__list">
<label class="filter-list__item ">
<span class="filter-list__title">
<a href={x.nombre}>{x.nombre.replace(/-/g," ")}</a>
</span>
</label>

</div>
    )
}
</div>
</div>
</div>
</div>
</div>

</div>  


    )
}




</div>


                </div>
                <div className="block-sidebar__item"></div>
            </div>
}
        </div>
    )
}

export default WidgetFilters


    // <div class="filter-categories__counter">72</div>

// <span class="filter-list__counter">168</span>
