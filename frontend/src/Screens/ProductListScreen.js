import React, { useEffect, useState } from 'react';
import './ProductListScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

// import { Link} from 'react-router-dom';
import formatCurrency, {
  createProduct,
  deleteProduct,
  listProducts,
} from '../actions/productActions';
import loadingPage from '../component/LoadingPage';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from '../constants/productConstants';

export default function ProductListScreen(props) {
  const[searchTerm, setSearchTerm] = useState("");


  const productList = useSelector((state) => state.productList);
  const { loading, error, productos} = productList;



  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    producto: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/producto/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listProducts({})
    );
  }, [
    createdProduct,
    dispatch,
    props.history,
    successCreate,
    successDelete,
    userInfo._id,

  ]);

  const deleteHandler = (producto) => {
    if (window.confirm('¿estas seguro de eliminarlo?')) {
      dispatch(deleteProduct(producto._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };
  return (
    <div className="productListContainer">
      <div className="row">
        <h1 className="titulelist">Productos</h1>
        <input 
        className="inputSearchPL"
         type="text"
         placeholder="Buscar producto..." 
         onChange={(e) =>{setSearchTerm(e.target.value)}}
         />
        <button type="button" className="button-success" onClick={createHandler}>
          Crear Producto
        </button>
      </div>
      

      {loadingDelete && <LoadingBox/>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">Producto eliminado satisfactoriamente</MessageBox>
      )}
      {loadingCreate && <LoadingBox/>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <div className="loading-div">
           <LoadingBox/>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        {
          
          <table className="table">
            <thead>
              <tr>
                <th className="table-hidden">ID</th>
                <th>CODIGO</th>
                <th>INFO</th>
                <th className="table-hidden">PRECIO</th>
                <th className="table-hidden">MARCA</th>
                <th className="table-hidden">CATEGORIA</th>
                <th className="table-hidden">SUBCATEGORIA</th>
                <th className="table-hidden">ENSTOCK</th>
                <th className="table-hidden">UNIDAD</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {
                productos.filter((producto)=>{
                  if (searchTerm === ""){
                    return producto
                  }else if  (producto.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }else if  (producto.subcategoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }else if  (producto.marca.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }else if  (producto.codigo.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }else if  (producto.unidad.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }else if (producto.info.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return producto
                  }
              }).map((producto) => (
                <tr key={producto._id}>
                  <td className="table-hidden">{producto._id}</td>
                  <td >{producto.codigo}</td>
                  <td><img src={producto.imagen.img1} className="smallProductlist" alt="" />{"  "}{producto.info}</td>
                  <td className="table-hidden">{formatCurrency(producto.precio)}</td>
                  <td className="table-hidden">{producto.marca ? producto.marca.replace(/-/g," "):""}</td>
                  <td className="table-hidden">{producto.categoria ? producto.categoria.replace(/-/g," "):""}</td>
                  <td className="table-hidden">{producto.subcategoria ? producto.subcategoria.replace(/-/g," "):""}</td>
                  <td className="table-hidden">{producto.enStock}</td>
                  <td className="table-hidden">{producto.unidad}</td>
                  <td>
                    <IconButton
                      aria-label="editar"
                      onClick={() =>
                        props.history.push(`/producto/${producto._id}/edit`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="eliminar"
                      onClick={() => deleteHandler(producto)}
                    >
                    <DeleteForeverIcon className="button-remove"/>

                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        </>
      )}
      
    </div>
  );
}
