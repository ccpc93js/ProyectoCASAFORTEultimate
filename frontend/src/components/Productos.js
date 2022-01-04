import React, { useEffect, useState, Fragment } from 'react'
import Filtrador from './Filtrador'
import './Productos.css'
import WidgetFilters from './WidgetFilters'
import data from './data.js'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import { useDispatch, useSelector } from 'react-redux'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { listProducts } from '../actions/productActions'
import DrawerFilter from './DrawerFilter';
import { addToCart } from '../actions/cartActions'
import { handleCartSideOpen } from './DrawerRight'
import ReactPaginate from "react-paginate";
import Producto from './Producto'


export const $porcentajeEmpresa = 0.30
export const $porcentajePersona = 0.40

export default function Productos(props) {
  const {categoria,subcategoria, marca} = props
  console.log(categoria,subcategoria, marca)
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [productosF, setProductosF] = useState([]);

  const dispatch = useDispatch()


  const productList = useSelector((state) => state.productList)
  const { loading, error, productos } = productList;
  console.log(productos)


  const [openFilter, setOpenFilter] = React.useState(false);

  // pagination
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 21;
  const pagesVisited = pageNumber * productsPerPage



  const pageCount = Math.ceil(productosF.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  const handleDrawerOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleDrawerCloseFilter = () => {
    setOpenFilter(false);
  };

  const accionOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  useEffect(() => {
    dispatch(listProducts([]));
  }, [dispatch])

  useEffect(() => {


    const fecthData = async () => {
      try {
        // eslint-disable-next-line array-callback-return
        const productFiltradoXProducto = productos.filter(x => {
          if (categoria)
            return (x.categoria === categoria)
          if (subcategoria)
            return (x.subcategoria === subcategoria)
          if (marca)
            return (x.marca === marca)
          if (props.all === "all")
            return (x.createdAt)
          if (props.enOferta) {
            return (x.enOferta === true)
          }
        }).sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
        setProductosF(productFiltradoXProducto);
      } catch (error) {
        console.log(error)
      }
    };

    fecthData();

  }, [productos, props, categoria, marca, subcategoria])

  const displayProducts = productosF.slice(pagesVisited, pagesVisited + productsPerPage)

  const ordenar = (e) => {
    let clasificacion = e.target.value;
    setProductosF(productosF.slice().sort((a, b) =>
      // clasificacion ===""? productos:
      clasificacion === "Ordenar por Nombre Ascendente" ?
        a.info > b.info ? 1 : -1 :
        clasificacion === "Ordenar por Nombre Descendente" ?
          a.info < b.info ? 1 : -1 :
          clasificacion === "Ordenar por Codigo Ascendente" ?
            a.codigo > b.codigo ? 1 : -1 :
            clasificacion === "Ordenar por Codigo Descendente" ?
              a.codigo < b.codigo ? 1 : -1 :
              clasificacion === "Ordenar por Precio Ascendente" ?
                a.precio > b.precio ? 1 : -1 :
                clasificacion === "Ordenar por Precio Descendente" ?
                  a.precio < b.precio ? 1 : -1 : 0




    ))

  }



  const marcas = data.marcas.find(x => x.nombre === (marca) ? marca : "")


  const handleAddCart = (id) => {
    dispatch(addToCart(id, 1))
  }


  return (
    <div className="productos-container">
      <DrawerFilter handleDrawerClose={handleDrawerCloseFilter} open={openFilter} onClose={accionOpenFilter}></DrawerFilter>

      <div className="page-header">
        <div className="page-header__container container">
          <div className="page-header__breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Inicio</a>
                  <svg className="breadcrumb-arrow" >
                    <ArrowBackIosIcon />
                  </svg>
                </li>
                <li className="breadcrumb-item">
                  {

                    <a href={`${categoria? "/categorias": subcategoria? "/subcategorias":marca? "/marcas":""}/${categoria ? categoria : subcategoria ? subcategoria : marca ? marca : props.all ? props.all : "ofertas"}`}>{categoria ? categoria.replace(/-/g, " ") : subcategoria ? subcategoria.replace(/-/g, " ") : marca ? marca.replace(/-/g, " ") : props.all ? "todos" : "ofertas"}</a>
                  }
                  <svg className="breadcrumb-arrow">
                    <ArrowBackIosIcon />
                  </svg>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="shop-layout">

        <div className="shop-layout__sidebar">
          {(props.marcas) ? (
            <div className="sidebar_brand shadow-box-productos">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src={marcas.img} />
            </div>) : ("")
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

          <Filtrador handleDrawerOpenFilter={handleDrawerOpenFilter} ordenar={ordenar} totalProductos={productosF} productos={displayProducts} />

          {
            loading ? (
              <div className="loading-div">
                <LoadingBox />
              </div>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (

              productosF.length === 0 ?

                (
                  <div style={{ textAlign: "center", margin: "20px", alignItems: "center" }}>
                    <h1 style={{ fontSize: "20px" }}> No hay productos en esta seccion por el momento!</h1>
                  </div>
                ) : (
                  <Fragment>
                    <div className="products-row">
                      {
                        productosF.slice(pagesVisited, pagesVisited + productsPerPage).map(producto => (
                          <Producto
                          key={producto._id}
                          producto={producto}
                            handleAddCart={handleAddCart}
                            handleCartSideOpen={handleCartSideOpen}
                            userInfo={userInfo}
                          />
                        )
                        )


                      }


                    </div>
                    <ReactPaginate
                      previousLabel={<ArrowBackIosIcon />}
                      nextLabel={<ArrowForwardIosIcon />}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />


                  </Fragment>
                )
            )
          }


        </div>

      </div>
    </div>


  )
}
