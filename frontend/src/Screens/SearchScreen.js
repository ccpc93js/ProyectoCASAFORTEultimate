import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
// import { listProducts } from '../actions/productActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

export default function SearchScreen(props) {
  const[searchTerm, setSearchTerm] = useState("");
  const {productSearched } = useParams();

  setSearchTerm(productSearched)

  const [productos, setProductos]=useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const searchProductos = productos.filter((val)=>{
    if (searchTerm === ""){
      return ""
    }else if  (val.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }else if  (val.subcategoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }else if  (val.marca.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }else if  (val.codigo.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }else if  (val.unidad.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }else if (val.info.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return val
    }
  })

  const fecthData = async () =>{
    try{
        
        // setLoading(true);

            const {data} = await axios.get('/api/productos');
            // setLoading(false);
            setProductos(data);
    }catch(err){
        // setError(err.message);
        // setLoading(false);
    }
};
fecthData();
  return (
    <div>
    {

        (searchProductos.length === 0 )?
        ("")
        :( <div className="total-search" aria-hidden={ (searchProductos.length === 0 )?("true"):("false")}>
        <span className="total-search__resultados">
         { searchProductos.length} RESULTADOS
        </span> 
        <div>

        </div>
      </div>)  

      }

<div className="containerElement">

      

{
  
  searchProductos.map((val, key)=>{
    return (
      
      <a href={`/producto/${val._id}/${val.info.replace(/" "/g,"-")}`} className="">
      
      <div className="product-card-search " key={key}>
        {/* {
          loading ? (
            <LoadingBox></LoadingBox>
            ): error ?(
            <MessageBox variant="danger">{error}</MessageBox>):( */}
          <div className="product-image-search">

              <a href={`/producto/${val._id}/${val.info.replace(/ /g,"-")}`} className="product-image__body-search ">
              <img src={val.imagen} alt="" className="product-image__img imgnormalP-search "/>  
              </a>
          </div>
              <div className="product-card__info-search">
                <div className="elementSearch-p"><h3>{val.info}</h3></div>
                <div className="elementSearch-p"><h3>${val.precio}</h3></div>
          </div>


            
        {/* } */}
 

      </div>
      </a>

    );
  })
  
  
  
}
</div>


    </div>
  );
}
