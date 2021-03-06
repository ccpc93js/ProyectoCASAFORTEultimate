import React, { useEffect, useState } from 'react';
import './ProductEditScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import {Image} from 'cloudinary-react';
import formatCurrency, { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import loadingPage from '../components/LoadingPage';
import MessageBox from '../components/MessageBox';
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
  const [enOferta, setEnOferta] = useState('');
  const [descuento, setDescuento] = useState('');
  const [precioDeOferta, setPrecioDeOferta] = useState('');

  console.log(descuento)

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
      setEnOferta(producto.enOferta);
      setPrecioDeOferta(producto.precioDeOferta)
      setDescuento(producto.descuento)
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
        enOferta,
        descuento,
        precioDeOferta,
      })

    );
    // if(!previewSource)return;
    // UploadImage(previewSource);

  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  // const [fileInput, setfileInput] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const previewFile = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      setPreviewSource(reader.result)
    }
  }
  // console.log(previewSource)

  // const handleFileChange = (e) =>{
  //   const file = e.target.files[0];
  //   previewFile(file);
  // }

  // upload images Cloudinary
  // const UploadImage = async(base64) =>{
    
  //   setLoadingUpload(true);
  //   try {

  //     const { data } = await Axios.post('/api/uploads/cloudinary', base64, {
  //       body: JSON.stringify({data: data}),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },

  //     // await fetch('/api/uploads/cloudinary', {
  //     //   method: 'POST',
  //     //   body: JSON.stringify({data: base64}),
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //     // Authorization: `Bearer ${userInfo.token}`,
  //     //   },
  //     });
  //     // console.log(data)
  //     setImagen(data);
  //     setLoadingUpload(false);
  //   } catch (error) {
  //     setErrorUpload(error.message);
  //     setLoadingUpload(false);
  //   }


  // }


  // upload images local
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    previewFile(file);

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
    <div className="productEditContainer zona-form">
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
            {/* <div className="input-contenedor">
              <label htmlFor="imageFile">Imagen File:</label>
              <input
                type="file"
                id="imageFile"
                label="Seleccione la imagen"
                onChange={uploadFileHandler}
                // value={imagen}
              ></input>
              {previewSource && (
                <img src={previewSource} alt="chosen" style={{width: '10rem', height: '10rem'}}></img>
              )}
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div> */}
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
              <label htmlFor="enStock">En Stock:</label>
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
            <div className="oferta input-contenedor">
              <label htmlFor="enOferta">En Oferta:</label>
              <input
                id="enOferta"
                type="checkbox"
                value={enOferta}
                onChange={(e) => setEnOferta(e.target.checked)}
              ></input>
            </div>
            {
                (enOferta === true)?
                <div className="input-contenedor">
                  <label htmlFor="descuento">descuento:</label>
                  <input
                    id="descuento"
                    type="number"
                    required
                    placeholder="descuento"
                    value={descuento}
                    onChange={(e) => setDescuento(e.target.value)}
                  ></input>%
                </div>
                :("")
              }
              {
                (enOferta === true)?
                <div className="input-contenedor">
                  <label htmlFor="precioDeOferta">Precio de oferta:</label>
                  <input
                    id="precioDeOferta"
                    type="number"
                    required
                    placeholder="precio De Oferta"
                    value={precioDeOferta && precio - (precio * (descuento/100))}
                    onChange={(e) => setPrecioDeOferta(precio - (precio * (descuento/100)) || e.target.value)}
                  ></input>
                </div>
                :("")
              }

            <br></br>
            <br></br>

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
