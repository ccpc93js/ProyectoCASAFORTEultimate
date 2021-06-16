import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
// import { Link } from 'react-router-dom';
import { register } from '../../actions/userActions';
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
import { mostrarContrasena,mostrarConfirmContrasena } from '../MostrarContrasena';
import axios from '../../../node_modules/axios/index';

import dataDyC from './dataDyC'

function LoginRegistro(props) {
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tDocument, setTD] = useState('');
  const [nDocument, setND] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [tipoClient, setTipoClient] = useState('');


  // const redirect = props.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  if(!userInfo){
    props.history.push('/signin')
}

const enviarEmail = async(name,email,nit, password)=>{
  await axios.post("/api/emails/loginRegister",{
    name,
    email,
    nit,
    password
  });
};
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('contraseña y confirmar contraseña no coinciden');
      } else {
        dispatch(register(name, nit, email, password,tDocument,nDocument,department,city,adress,tel,cel,tipoClient));
        alert("Usuario registrado correctamete")

  
      enviarEmail(name,email,nit, password);
  
      };

     };

  // useEffect(() => {
  //   if (userInfo) {
  //    alert("Usuario registrado correctamete")
  //   }
  // }, [ userInfo]);
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
        <div className="zona-form">
            <div className="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>
             
            <form className="formulario" onSubmit={submitHandler}>
                 <h1>Registrar Usuario</h1>
                  <br/>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                <div className="input-contenedor">
                    <i className=""><PersonIcon/></i>
                    <input 
                    type="text2" 
                    id="name"
                    placeholder="Nombre o empresa"
                    required
                    onChange={(e) => setName(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><ContactsIcon/></i>
                    <input 
                    type="text2" 
                    id="nit"
                    placeholder="Nit o Cedula"
                    required
                    onChange={(e) => setNit(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><EmailIcon/></i>
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PostAddIcon/></i>
                    {/* <input type="text2" placeholder="Tipo de Documento"/> */}
                    <select 
                    required
                    type="text2"
                    onChange={(e) => setTD(e.target.value)}
                    
                    >
                        <option  selected disables >Selecciona el tipo de documento</option>
                        <option value="Pasaporte">Nit sin dijito de verificacion</option>
                        <option value="Cedula de ciudadania" >Cedula de ciudadania</option>
                        <option value="Cedula de ciudadania" >Cedula de extranjeria</option>
                    </select>
                </div>

                <div className="input-contenedor">
                <i className=""><PostAddIcon/></i>
                    <input
                    required
                     type="number"
                     placeholder="Nº Documento"
                     onChange={(e) => setND(e.target.value)}
                      
                      />
                </div>

                <div className="input-contenedor">
                    <i className=""><LocationOnIcon/></i>
                    <select 
                    required
                    type="text2" 
                    placeholder="Departamento"
                    onChange={(e) => setDepartment(e.target.value), ciudadesSelect}

                    >
                        <option  selected disables >Seleccionar departamento</option>
                        {departamentos.map(x=>
                        <option value={x.departamento}>{x.departamento}</option>

                        )}
                    </select>
                </div>

                <div className="input-contenedor">
                <i className=""><LocationOnIcon/></i>
                    {/* <select
                     required
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
                     required
                     type="text2" 
                     placeholder="Ciudad"
                     onChange={(e) => setCity(e.target.value)}
                     
                     

                     />
                </div>

                <div className="input-contenedor">
                <i className=""><LocationOnIcon/></i>
                    <input 
                    required
                    type="text2" 
                    placeholder="Direcci&oacute;n"
                    onChange={(e) => setAdress(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PhoneIcon/></i>
                    <input 
                    required
                    type="number" 
                    placeholder="Telefono"
                    onChange={(e) => setTel(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PhoneIphoneIcon/></i>
                    <input 
                    required
                    type="number" 
                    placeholder="Celular"
                    onChange={(e) => setCel(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><AccountCircleIcon/></i>
                    {/* <input type="text2" placeholder="Selecciona el tipo de cliente"/> */}
                    <select 
                    required
                    type="text2"
                    onChange={(e) => setTipoClient(e.target.value)}
                    
                    >
                        <option selected disables>Selecciona el tipo de cliente</option>
                        <option value="Empresa" key="">Empresa</option>
                        <option value="Persona" key="">Persona</option>
                    </select>
                   
                </div>


                <div className="input-contenedor">
                    <i className=""><LockIcon/></i>
                    <input 
                    type="password" 
                    id="password"
                    placeholder="Contraseña"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconButton 
                    id="boton"
                    onClick={mostrarContrasena}>
                      <VisibilityIcon/>
                    </IconButton>
                </div>

                <div className="input-contenedor">
                    <i className=""><LockIcon/></i>
                    <input 
                    type="password" 
                    id="confirmPassword"
                    placeholder="Confirmar contraseña"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <IconButton 
                    id="boton"
                    onClick={mostrarConfirmContrasena}>
                      <VisibilityIcon/>
                    </IconButton>
                </div>
                <div className="button-center">
                <button type="submit"  className="button">Registrar</button>
                </div>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p>
                <p>¿No tienes una cuenta?<a className="link" href="/registrarse">Solicita tu cuenta</a></p>
               
            
            </form>  
        </div>
    )
}

export default LoginRegistro
