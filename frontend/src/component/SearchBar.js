// import data from "./data.js"; 
import {useState} from 'react'
import './ModalSearch.css'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import axios from '../../node_modules/axios/index';
// import axios from 'axios'


function SearchBar() {

  const[searchTerm, setSearchTerm] = useState("");
  // const searchProductos = axios.get('/api/productos');
  const [productos, setProductos]=useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const searchProductos = productos

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
      <div className="">
      
      <input 
      onFocus={true}
      type="text"
       placeholder="Buscar producto..." 
       onChange={(e) =>{setSearchTerm(e.target.value)}}/>

      </div>
      <div className="input-search-content">

      <div className="containerElement">

      {
        

        searchProductos.filter((val)=>{
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
        }).map((val, key)=>{
          return (
            
            
            <div className="element" key={key}>
              {/* {
                loading ? (
                  <LoadingBox></LoadingBox>
                  ): error ?(
                  <MessageBox variant="danger">{error}</MessageBox>):( */}

                    <a href={`/producto/${val._id}`} className="elementSearch">
                    <img src={val.imagen.img1} alt="" className="img-search"/>  
                    <div className="info-element">
                      <div className="elementSearch-p">{val.info}</div>
                      <div className="elementSearch-p">${val.precio}</div>
                    </div>
                 </a>

                  
              {/* } */}
       
  
            </div>
          );
        })
        
        
        
      }
      </div>
      </div>
    </div>
  );
}

export default SearchBar;
