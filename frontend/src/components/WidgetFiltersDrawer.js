import React, { useState } from 'react'
import './WidgetFiltersDrawer.css'
import data from './data.js'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function WidgetFiltersDrawer(props) {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [dataCategorias, setDataCategorias]=useState([]);
    // const [dataSubcategorias, setDataSubcategorias]=useState([]);
    // const [dataMarcas, setDataMarcas]=useState([]);

    // const axiosDataCategorias = async () =>{
    //    try{
    //     //    setLoading(true);
    //        const {data} = await axios.get('/api/productos/categorias/get');
    //        setLoading(false);
    //        setDataCategorias(data);

    //    }catch(error){
    //     setError(error.message);
    //     setLoading(false);

    //    }
    
    // };
    // axiosDataCategorias();

    // const axiosDataSubcategorias = async () =>{ 
    //    try{
    //     //    setLoading(true);
   
    //        const {data} = await axios.get('/api/productos/subcategorias/get');
    //        setLoading(false);
   
    //        setDataSubcategorias(data);

       
    //     }catch(error){
    //     setError(error.message);
    //     setLoading(false);

    //    }

    // };
    // axiosDataSubcategorias();
    
    // const axiosDataMarcas = async () =>{
    //     try{
    //         // setLoading(true);
    
    //         const {data} = await axios.get('/api/productos/marcas/get');
    //         setLoading(false);
    
    //         setDataMarcas(data);

    //     }catch(error){
    //         setError(error.message);
    //         setLoading(false);
    
    //        }

    // };
    // axiosDataMarcas();


    // const subcategorias = dataSubcategorias
    const subcategorias = data.subcategorias
    let productFiltradoXProducto = subcategorias.filter((x) =>{
        if(props.categorias)
        return (x.categoria === props.categorias)
        if(props.subcategorias)
        return (x.subcategoria === props.categorias) 
        if(props.marcas)
        return (x.marca === props.categorias)  
     })
     
    //  const marcas = dataMarcas
     const marcas = data.marcas
     let productFiltradoXMarca = marcas.filter((x) =>{
        if(props.categorias)
        return (x.categoria.find(x=>x===props.categorias ) === props.categorias)
        // return (x.categoria[1] === props.categorias)
        if(props.subcategorias)
        return (x.subcategoria.find(x=>x===props.categorias ) === props.categorias)  
     })

    //  const categorias = dataCategorias
     const categorias = data.categorias


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


        <div className="block-sidebar-Drawer ">
        {
           
            <div className=" block-Drawer block-sidebar__body-Drawer">
                <div className="block-sidebar__item-Drawer">
                <div className="widget-filters-Drawer widget widget-filters-Drawer--offcanvas--mobile-Drawer"  >
<h4 className="widget-filters-Drawer__title widget__title-Drawer">
{
    nombreWidgetFilters()
    
}
</h4>
{

    
    (props.categorias || props.subcategorias )?(
<div className="widget-filters-Drawer__list-Drawer ">
<div className="widget-filters-Drawer__item-Drawer">
<div className="filter-Drawer filter--opened-Drawer" data-collapse-item="">


<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Subcategorias
<svg className="filter__arrow-Drawer" width="12px" height="7px">
    <ExpandLessIcon/>
</svg>
</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-categories-Drawer">
<ul className="filter-categories__list-Drawer">
{
    productFiltradoXProducto.map(x=>
     <li key={x.nombre} className="filter-categories__item-Drawer filter-categories__item--parent-Drawer">
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

<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">
<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Marcas

</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-list-Drawer">
{
    productFiltradoXMarca.map(x=>
<div key={x.nombre}  className="filter-list__list-Drawer">
<label className="filter-list__item-Drawer ">
<span className="filter-list__title-Drawer">
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
        <div className="widget-filters-Drawer__list-Drawer">
<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">


<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Categorias

</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-categories-Drawer">
<ul className="filter-categories__list-Drawer">
{
    categorias.map(x=>
     <li key={x.nombre} className="filter-categories__item filter-categories__item--parent-Drawer">
    
       
  
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

<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">
<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Subcategorias
<svg className="filter__arrow-Drawer" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-categories-Drawer">
<ul className="filter-categories__list-Drawer">
{
    subcategorias.map(x=>
     <li key={x.nombre} className="filter-categories__item-Drawer filter-categories__item--parent-Drawer">
    
       
  
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
<div className="widget-filters-Drawer__list-Drawer">
<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">


<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Categorias
<svg className="filter__arrow-Drawer" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-categories-Drawer">
<ul className="filter-categories__list-Drawer">
{
    categorias.map(x=>
     <li key={x.nombre} className="filter-categories__item-Drawer filter-categories__item--parent-Drawer">
    
       
  
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

<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">
<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Subcategorias
<svg className="filter__arrow-Drawer" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-categories-Drawer">
<ul className="filter-categories__list-Drawer">
{
    subcategorias.map(x=>
     <li key={x.nombre} className="filter-categories__item-Drawer filter-categories__item--parent-Drawer">
    
       
  
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

<div className="widget-filters-Drawer__item-Drawer">
<div className="filter filter--opened-Drawer" data-collapse-item="">
<button type="button" className="filter__title-Drawer" data-collapse-trigger="">
Marcas
<svg className="filter__arrow-Drawer" width="12px" height="7px">
<use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
</svg>
</button>
<div className="filter__body-Drawer" data-collapse-content="">
<div className="filter__container-Drawer">
<div className="filter-list">
{
    marcas.map(x=>
<div key={x.nombre}  className="filter-list__list-Drawer">
<label className="filter-list__item-Drawer ">
<span className="filter-list__title-Drawer">
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

export default WidgetFiltersDrawer


    // <div className="filter-categories__counter">72</div>

// <span className="filter-list__counter">168</span>
