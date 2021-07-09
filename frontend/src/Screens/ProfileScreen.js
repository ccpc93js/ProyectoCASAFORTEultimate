
import React, { useEffect, useState } from 'react';
import './ProfileScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile} from '../actions/userActions';
import loadingPage from '../component/LoadingPage';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import ContactsIcon from '@material-ui/icons/Contacts';


import { mostrarContrasena } from '../component/MostrarContrasena';
// import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

import dataDyC from '../component/enlaces/dataDyC'


export default function ProfileScreen() {
  const [name, setName] = useState('');
  // const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [tDocument, setTD] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  // const [tipoClient, setTipoClient] = useState('');


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      // dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      // setNit(user.nit);
      setEmail(user.email);
      // setTD(user.tDocument);
      setDepartment(user.department);
      setCity(user.city);
      setAdress(user.adress);
      setTel(user.tel);
      setCel(user.cel);
      // setTipoClient(user.tipoClient);

    
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          // nit,
          email,
          // tDocument,
          department,
          city,
          adress,
          tel,
          cel,
          // tipoClient,
          password,

        })
      );
    }
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

}
  return (
    <div className="profile-container zona-form">
      <form className="formulario" onSubmit={submitHandler}>
        <div className="contenedor">
          <h1>Perfil de usuario</h1>
        </div>
        {loading ? (
        <div className="loading-div">
          <LoadingBox/>
        </div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
             
             {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Perfil actualizado correctamente
                </MessageBox>
              )}
         
            <div className="input-contenedor">
            <i className=""><PersonIcon/></i>
              <input
                id="name"
                type="text"
                placeholder=" Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            {/* <div className="input-contenedor">
                    <i className=""><PostAddIcon/></i>
                    <select 
                    value={tDocument}
                    type="text2"
                    onChange={(e) => setTD(e.target.value)}
                    
                    >
                        <option value="Nit sin dijito de verificacion">Nit sin dijito de verificacion</option>
                        <option value="Cedula de ciudadania" >Cedula de ciudadania</option>
                        <option value="Cedula de ciudadania" >Cedula de extranjeria</option>
                    </select>
                </div> */}
            {/* <div className="input-contenedor">
            <i className=""><ContactsIcon/></i>
              <input
                id="nit"
                type="nit"
                placeholder="Nit o Cedula"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              ></input>
            </div> */}
            <div className="input-contenedor">
            <i className=""><EmailIcon/></i>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>




                <div className="input-contenedor">
                    <i className=""><LocationOnIcon/></i>
                    <select 
                    // value={department}
                    type="text2" 
                    placeholder="Departamento"
                    onChange={(e) => setDepartment(e.target.value), ciudadesSelect}

                    >
                        <option  value={department}>{department}</option>
                        {departamentos.map(x=>
                        <option value={x.departamento}>{x.departamento}</option>

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

               {/* <div className="input-contenedor">
                    <i className=""><AccountCircleIcon/></i>
                    <select 
                    value={tipoClient}
                    type="text2"
                    onChange={(e) => setTipoClient(e.target.value)}
                    
                    >
                        <option value="Empresa" key="">Empresa</option>
                        <option value="Persona" key="">Persona</option>
                    </select>
                   
                </div> */}


            <div className="input-contenedor">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
                    <IconButton 
                    id="boton"
                    onClick={mostrarContrasena}>
                      <VisibilityIcon/>
                    </IconButton>
            </div>
            <div className="input-contenedor">
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirme Contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
                    <IconButton 
                    id="boton"
                    onClick={mostrarContrasena}>
                      <VisibilityIcon/>
                    </IconButton>
            </div>
     
            <div>
              <label />
              <button className="button block" type="submit">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}