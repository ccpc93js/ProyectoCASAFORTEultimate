import React from 'react'
import './WidgetFilters.css'
// import axios from 'axios'
import data from './data.js'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarsIcon from '@material-ui/icons/Stars';

function WidgetFilters(props) {
    // const [dataCategorias, setDataCategorias]=useState([]);
    // const [dataSubcategorias, setDataSubcategorias]=useState([]);
    // const [dataMarcas, setDataMarcas]=useState([]);

    // const axiosDataCategorias = async () =>{

    //     // try{

    //     const {data} = await axios.get('/api/productos/categorias/get');
    //     setDataCategorias(data);
    // // }catch(error){
    // //         console.log(error.message)
    // // }

    // };
    // axiosDataCategorias();

    // const axiosDataSubcategorias = async () =>{   
    //     // try{

    //     const {data} = await axios.get('/api/productos/subcategorias/get');
    //     setDataSubcategorias(data);  
    // // }catch(error){
    // //     console.log(error.message)
    // // }
    // };
    // axiosDataSubcategorias();

    // const axiosDataMarcas = async () =>{
    //     // try{

    //     const {data} = await axios.get('/api/productos/marcas/get');
    //     setDataMarcas(data);
    // // }catch(error){
    // //     console.log(error.message)
    // // }
    // };
    // axiosDataMarcas();


    const subcategorias = data.subcategorias

    // const subcategorias = dataSubcategorias
    // eslint-disable-next-line array-callback-return
    let productFiltradoXProducto = subcategorias.filter((x) => {
        if (props.categorias)
            return (x.categoria === props.categorias)
        if (props.subcategorias)
            return (x.subcategoria === props.categorias)
        if (props.marcas)
            return (x.marca === props.categorias)
    })

    const marcas = data.marcas

    //  const marcas = dataMarcas

    // eslint-disable-next-line array-callback-return
    let productFiltradoXMarca = marcas.filter((x) => {
        if (props.categorias)
            return (x.categoria.find(x => x === props.categorias) === props.categorias)
        // return (x.categoria[1] === props.categorias)
        if (props.subcategorias)
            return (x.subcategoria.find(x => x === props.categorias) === props.categorias)
    })


    const categorias = data.categorias

    //  const categorias = dataCategorias


    //  const submithandler =(e)=>{

    //  }

    const nombreWidgetFilters = () => {
        if (props.categorias)
            return (props.categorias.replace(/-/g, " "))
        if (props.subcategorias)
            return (props.subcategorias.replace(/-/g, " "))
        if (props.marcas)
            return (props.marcas.replace(/-/g, " "))
        if (props.nuevos)
            return (props.nuevos)
    }

    return (
        <div className="block-sidebar ">
            {
                <div className=" block block-sidebar__body">
                    <div className="block-sidebar__item">
                        <div className="widget-filters widget widget-filters--offcanvas--mobile"  >
                            <h4 className="widget-filters__title widget__title">
                                {
                                    nombreWidgetFilters()
                                }
                            </h4>
                            {


                                (props.categorias || props.subcategorias) ? (
                                    <div className="widget-filters__list ">
                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >


                                                <button type="button" className="filter__title"  >
                                                    Subcategorias
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <ExpandLessIcon />
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                {
                                                                    productFiltradoXProducto.map(x =>
                                                                        <li key={x.nombre} className="filter-categories__item filter-categories__item--parent">
                                                                            <svg className="filter-categories__arrow" >
                                                                                <StarsIcon />
                                                                            </svg>
                                                                            <a data-id="3" href={`/categorias/${x.categoria}/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
                                                                        </li>
                                                                    )

                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >
                                                <button type="button" className="filter__title"  >
                                                    Marcas
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-list">
                                                            {
                                                                productFiltradoXMarca.map(x =>
                                                                   <div key={x.nombre}  className="filter-list__list">
                                                                        <label className="filter-list__item ">
                                                                            <span className="filter-list__title">
                                                                                <a href={`/marcas/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
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
                                ) : (props.marcas) ? (
                                    <div className="widget-filters__list">
                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >


                                                <button type="button" className="filter__title"  >
                                                    Categorias
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                {
                                                                    categorias.map(x =>
                                                                        <li key={x.nombre} className="filter-categories__item filter-categories__item--parent">
                                                                            <svg className="filter-categories__arrow">
                                                                                <StarsIcon />
                                                                            </svg>
                                                                            <a href={`/categorias/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
                                                                        </li>
                                                                    )

                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >
                                                <button type="button" className="filter__title"  >
                                                    Subcategorias
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                {
                                                                    subcategorias.map(x =>
                                                                        <li key={x.nombre} className="filter-categories__item filter-categories__item--parent">
                                                                            <svg className="filter-categories__arrow">
                                                                                <StarsIcon />
                                                                            </svg>
                                                                            <a href={`/categorias/${x.categoria}/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
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

                                ) : (
                                    <div className="widget-filters__list">
                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >


                                                <button type="button" className="filter__title"  >
                                                    Categorias
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                {
                                                                    categorias.map(x =>
                                                                        <li key={x.nombre} className="filter-categories__item filter-categories__item--parent">
                                                                            <svg className="filter-categories__arrow">
                                                                                <StarsIcon />
                                                                            </svg>
                                                                            <a href={`/categorias/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
                                                                        </li>
                                                                    )

                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >
                                                <button type="button" className="filter__title"  >
                                                    Subcategorias
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-categories">
                                                            <ul className="filter-categories__list">
                                                                {
                                                                    subcategorias.map(x =>
                                                                        <li key={x.nombre} className="filter-categories__item filter-categories__item--parent">
                                                                            <svg className="filter-categories__arrow">
                                                                                <StarsIcon />
                                                                            </svg>
                                                                            <a href={`/categorias/${x.categoria}/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
                                                                        </li>
                                                                    )

                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-filters__item">
                                            <div className="filter filter--opened" >
                                                <button type="button" className="filter__title"  >
                                                    Marcas
                                                    <svg className="filter__arrow" width="12px" height="7px">
                                                        <use href="/images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                                <div className="filter__body" >
                                                    <div className="filter__container">
                                                        <div className="filter-list">
                                                            {
                                                                marcas.map(x =>
                                                                   <div key={x.nombre}  className="filter-list__list">
                                                                        <label className="filter-list__item ">
                                                                            <span className="filter-list__title">
                                                                                <a href={`/marcas/${x.nombre}`}>{x.nombre.replace(/-/g, " ")}</a>
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


    // <div className="filter-categories__counter">72</div>

// <span className="filter-list__counter">168</span>
