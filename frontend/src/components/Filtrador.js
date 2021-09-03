import React from 'react'
import './Filtrador.css'
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

function Filtrador(props) {
        
    return (
        <div>
        <div className="products-view-options">
        <div className="view-options ">
        <div className="view-options__div button-filtro-div">
        <button type="button" className="filters-button">
        <svg className="filters-button-icon" width="16px" height="16px">
        <use href="/images/sprite.svg#filters-16"></use>
        </svg>
        <span className="filters-button-title">Filtros</span>
        </button>
        </div>

        <div className="view-options-legend view-options__div" >{"Muestra " + props.productos.length +  " de " + props.totalProductos.length + " productos "}</div>
        <div className="view-options-divider"></div>
        <div className="view-options-control">
        <div className="view-options__div">
        <div className="menu-button-filter">

        <IconButton
                onClick={props.handleDrawerOpenFilter}
                className="menu-button"
                size="small"
                >
                <FilterListIcon/>
                Filtros
            </IconButton>
        
        </div>
        <select className="form-control form-control-sm shadow-box-productos" id="orderby" onChange={props.ordenar} >
        <option value="Ordenar por Codigo Ascendente">Ordenar por Codigo Ascendente</option>
        <option value="Ordenar por Codigo Descendente">Ordenar por Codigo Descendente</option>
        <option value="Ordenar por Nombre Ascendente">Ordenar por Nombre Ascendente</option>
        <option value="Ordenar por Nombre Descendente">Ordenar por Nombre Descendente</option>
        <option value="Ordenar por Precio Ascendente">Ordenar por Precio Ascendente</option>
        <option value="Ordenar por Precio Descendente">Ordenar por Precio Descendente</option>
        </select>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Filtrador
