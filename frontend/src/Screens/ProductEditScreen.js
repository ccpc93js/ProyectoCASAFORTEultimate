import React, { useEffect, useState } from 'react';
import './ProductEditScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [codigo, setCodigo] = useState('');
  const [info, setInfo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [subcategoria, setSubcategoria] = useState('');
  const [enStock, setEnStock] = useState('');
  const [unidad, setUnidad] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, producto } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/listaProductos');
    }
    if (!producto || producto._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setCodigo(producto.codigo);
      setInfo(producto.info);
      setPrecio(producto.precio);
      setImagen(producto.imagen);
      setMarca(producto.marca);
      setCategoria(producto.categoria);
      setSubcategoria(producto.subcategoria);
      setEnStock(producto.enStock);
      setUnidad(producto.unidad);
    }
  }, [producto, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        codigo,
        info,
        precio,
        imagen,
        categoria,
        subcategoria,
        marca,
        enStock,
        unidad,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('imagen', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImagen(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div className="productEditContainer">
      <form className="formulario" onSubmit={submitHandler}>
        <div>
          <h1 >Editar Producto {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
        <div className="loading-div">
           <LoadingBox/>
        </div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="input-contenedor">
              <label htmlFor="codigo">Codigo:</label>
              <input
                id="codigo"
                type="text"
                placeholder="Codigo"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="info">Info:</label>
              <input
                id="info"
                type="text"
                placeholder="Info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="precio">Precio:</label>
              <input
                id="precio"
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="imagen">Imagen:</label>
              <input
                id="imagen"
                type="text"
                placeholder="Imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="imageFile">Imagen File:</label>
              <input
                type="file"
                id="imageFile"
                label="Seleccione la imagen"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div className="input-contenedor">
              <label htmlFor="marca">Marca:</label>
              <input
                id="marca"
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="categoria">Categoria:</label>
              <input
                id="categoria"
                type="text"
                placeholder="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="subcategoria">Subcategoria:</label>
              <input
                id="subcategoria"
                type="text"
                placeholder="Subategoria"
                value={subcategoria}
                onChange={(e) => setSubcategoria(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="enStock">EnStock:</label>
              <input
                id="enStock"
                type="text"
                placeholder="EnStock"
                value={enStock}
                onChange={(e) => setEnStock(e.target.value)}
              ></input>
            </div>

            <div className="input-contenedor">
              <label htmlFor="unidad">Unidad:</label>
              <input
                id="unidad"
                type="text"
                placeholder="Unidad"
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
              ></input>
            </div>
            <div className="button-center" >
              <label></label>
              <button className="button" type="submit">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
