// import data from "./data.js"; 
import { useEffect, useState } from 'react'
import './ModalSearch.css'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import axios from '../../node_modules/axios/index';
import formatCurrency, { listProducts } from '../actions/productActions';
import Fade from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import SearchProduct from './SearchProduct';

// import axios from 'axios'


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productFound, setProductFound] = useState([])

  const productList = useSelector((state) => state.productList)
  const { loading, error, productos } = productList;
  console.log(productos)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(listProducts([]));
  }, [dispatch])





  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   props.history.push(`/search/${searchTerm}`);
  // };

  useEffect(() => {

    if (!loading) {

      const searchProductos = productos.filter((val) => {
        if (searchTerm === "") {
          return ""
        } else if (val.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } else if (val.subcategoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } else if (val.marca.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } else if (val.codigo.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } else if (val.unidad.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        } else if (val.info.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        }

        return val
      }

      )


      setProductFound(searchProductos)
    }

  }, [productos, searchTerm, loading])



  return (
    <div className="searchBar">
      <form className="" /*onSubmit={submitHandler}*/>

        <input
          type="text"
          placeholder="Buscar producto..."
          autoComplete="off"
          autoFocus
          onChange={(e) => { setSearchTerm(e.target.value) }} />
        {/* 
        <button className="hidden" type="submit">
        <i className="fa fa-search"></i>
      </button> */}
      </form>

      
      <div className="">

      </div>
      {

        (productFound.length === 0) ?
          ("")
          : (<div className="total-search" aria-hidden={(productFound.length === 0) ? ("true") : ("false")}>
            <span className="total-search__resultados">
              {productFound.length} RESULTADOS
            </span>
            {/* <button className="total-search__ver-todos" type="submit">
          VER TODOS
        </button> */}
            <div>

            </div>
          </div>)

      }

      <Fade bottom cascade={true}>

        <div className="containerElement">

          {

            productFound.slice(/*0,4*/).map((val, key) => {
              return (

                <SearchProduct
                  val={val}
                  key={key}
                  loading={loading}
                  error={error}
                />

              );
            }).sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)



          }
        </div>
      </Fade>

    </div>
  );
}

export default SearchBar;
