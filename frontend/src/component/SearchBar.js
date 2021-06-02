// import data from "./data.js"; 
import {useState} from 'react'
import './ModalSearch.css'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import axios from '../../node_modules/axios/index';
import formatCurrency from '../actions/productActions';
import Fade from 'react-reveal/Fade';

// import axios from 'axios'


function SearchBar(props) {
  const[searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/${searchTerm}`);
  };

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
    <div className="searchBar">
    <form className="" /*onSubmit={submitHandler}*/>
      <div className="">

      <input 
      type="text"
       placeholder="Buscar producto..." 
       autoComplete="off"
       autoFocus
       onChange={(e) =>{setSearchTerm(e.target.value)}}/>
{/* 
        <button className="hidden" type="submit">
          <i className="fa fa-search"></i>
        </button> */}

      


      </div>
      {

        (searchProductos.length === 0 )?
        ("")
        :( <div className="total-search" aria-hidden={ (searchProductos.length === 0 )?("true"):("false")}>
        <span className="total-search__resultados">
         { searchProductos.length} RESULTADOS
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
        
        searchProductos.slice(/*0,4*/).map((val, key)=>{
          return (
            
            <a href={`/producto/${val._id}`} className="">
            
            <div className="product-card-search " key={key}>
            {
              (val.enOferta === true)?
             ( 
                <div  className="producto-en-oferta">
                  <p className="porcentaje">{val.descuento}%</p>
                  <p className="DCTO">DCTO</p>
                </div>
              )
              :
              (
                  ""  
              )
          }
              {/* {
                loading ? (
                  <LoadingBox></LoadingBox>
                  ): error ?(
                  <MessageBox variant="danger">{error}</MessageBox>):( */}
                <div className="product-image-search">

                    <a href={`/producto/${val._id}`} className="product-image__body-search ">
                    <img src={val.imagen} alt="" className="product-image__img imgnormalP-search "/>  
                    </a>
                </div>
                    <div className="product-card__info-search">
                      <div className="elementSearch-p"><h3>{val.info}</h3></div>
                      {/* <div className="elementSearch-p">    
                       {
                
                          (val.enOferta ===false)?(
                            <p>{formatCurrency(val.precio )}</p>
                          ):(
                            <div className="producto-en-oferta_precio">
                            <p className="p1"> {formatCurrency(val.precio )}</p>
                              <p className="p2"> {formatCurrency(val.precioDeOferta)}</p>

                            </div>
                            
                          )
                      }
                  </div> */}
                </div>


                  
              {/* } */}
       
  
            </div>
            </a>

          );
        })
        
        
        
      }
      </div>
      </Fade>
    </form>

    </div>
  );
}

export default SearchBar;
