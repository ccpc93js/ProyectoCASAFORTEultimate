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
import { mostrarContrasena,mostrarConfirmContrasena } from '../MostrarContrasena';
import axios from '../../../node_modules/axios/index';


function LoginRegistro(props) {
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


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
        dispatch(register(name, nit, email, password));
        alert("Usuario registrado correctamete")

  
      enviarEmail(name,email,nit, password);
  
      };

     };

  // useEffect(() => {
  //   if (userInfo) {
  //    alert("Usuario registrado correctamete")
  //   }
  // }, [ userInfo]);

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
