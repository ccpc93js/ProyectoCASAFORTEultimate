import React from 'react';
import './UserEditScreen.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../actions/userActions';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { USER_UPDATE_RESET } from '../constants/userConstants';


import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ContactsIcon from '@material-ui/icons/Contacts';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import dataDyC from '../component/enlaces/dataDyC'


export default function UserEditScreen(props) {
  const userId = props.match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nit, setNit] = useState('');
  const [tDocument, setTD] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [tipoClient, setTipoClient] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push('/listaUsuarios');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setNit(user.nit);
      setTD(user.tDocument);
      setDepartment(user.department);
      setCity(user.city);
      setAdress(user.adress);
      setTel(user.tel);
      setCel(user.cel);
      setTipoClient(user.tipoClient);

      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, nit,department,tDocument,city,adress,tel,cel,tipoClient,isAdmin }));
    console.log(userId, name, email, nit,department,tDocument,city,adress,tel,cel,tipoClient,isAdmin)
  };

  const data = dataDyC.DyC
  const [departamentos, setDepartamentos] = useState(data);
  const [ciudades, setCiudades] = useState([]);

  const ciudadesSelect = (e) =>{
    let departamento = e.target.value;
    setCiudades(data.filter((x)=>{

        if(departamento ){
        return (x.ciudades )
        }
    })
    )

};
  return (
    <div className="userListContainer zona-form">
      <form className="formulario" onSubmit={submitHandler}>
        <div>
          <h1 className="titulelist">Edita Usuario {name}</h1>
          {loadingUpdate && <LoadingBox/>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
        <div className="loading-div">
          <LoadingBox/>
         </div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="input-contenedor ">
            <i className=""><PersonIcon/></i>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
                    <i className=""><PostAddIcon/></i>
                    <select 
                    value={tDocument}
                    type="text2"
                    onChange={(e) => setTD(e.target.value)}
                    
                    >
                        <option key={1} value="Nit sin dijito de verificacion">Nit sin dijito de verificacion</option>
                        <option key={2} value="Cedula de ciudadania" >Cedula de ciudadania</option>
                        <option key={3} value="Cedula de extranjeria" >Cedula de extranjeria</option>
                    </select>
                </div>
            <div className="input-contenedor">
            <i className=""><ContactsIcon/></i>
              <input
                id="nit"
                type="text"
                placeholder="Nit"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              ></input>
            </div>

            <div className="input-contenedor">
                    <i className=""><EmailIcon/></i>
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>




                <div className="input-contenedor">
                    <i className=""><LocationOnIcon/></i>
                    <select 
                    value={department}

                    type="text2" 
                    placeholder="Departamento"
                    onChange={(e) => setDepartment(e.target.value)}

                    >
                        {[...Array(departamentos).keys()].map(x=>
                        <option key={x + 1} value={x.departamento}>{x.departamento}</option>

                        )}
                    </select>
                </div>

                <div className="input-contenedor">
                <i className=""><LocationOnIcon/></i>
                    {/* <select
                     value={email}

                     type="text2" 
                     placeholder="Ciudad"
                     onChange={(e) => setCity(e.target.value)}
                     
                     >
                        <option  selected disables >Seleccionar ciudad</option>
                        {ciudades.map(x=>
                        <option value={x[1]}>{x[1]}</option>

                        )}
                     </select> */}

                    <input
                     value={city}

                     type="text2" 
                     placeholder="Ciudad"
                     onChange={(e) => setCity(e.target.value)}
                     
                     

                     />
                </div>

                <div className="input-contenedor">
                <i className=""><LocationOnIcon/></i>
                    <input 
                    value={adress}

                    type="text2" 
                    placeholder="Direcci&oacute;n"
                    onChange={(e) => setAdress(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PhoneIcon/></i>
                    <input 
                    value={tel}

                    type="number" 
                    placeholder="Telefono"
                    onChange={(e) => setTel(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PhoneIphoneIcon/></i>
                    <input 
                    value={cel}

                    type="number" 
                    placeholder="Celular"
                    onChange={(e) => setCel(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><AccountCircleIcon/></i>
                    <select 
                    value={tipoClient}

                    type="text2"
                    onChange={(e) => setTipoClient(e.target.value)}
                    
                    >
                        <option key={1} value="Ferreteria" >Ferreteria</option>
                        <option key={2} value="Empresa" >Empresa</option>
                        <option key={3} value="Persona" >Persona</option>
                    </select>
                   
                </div>


            <div >
              <label htmlFor="isAdmin">Es Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
              <br></br>
              <br></br>
            </div>
            <div >
              <button type="submit" className="button block">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
