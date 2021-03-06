import React, { useEffect, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';


import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { mostrarContrasena } from '../components/MostrarContrasena';
import { signin } from '../actions/userActions';


function ZonaClientes(props) {
  const [email, setEmail] = useState('');
  const [nit, setNit] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(nit, email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);




    return (
        <div className="zona-form">
            <div className="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>
             
            <form className="formulario" onSubmit={submitHandler}>
                 <h1>Inicia Sesión</h1>
            <div className="loading-div">

                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

            </div>
                <div className="input-contenedor">
                    <i className=""><EmailIcon/></i>
                    <input 
                    type="email" 
                    id="email"
                    autoFocus
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>

                <div className="input-contenedor">
                    <i className=""><PersonIcon/></i>
                    <input 
                    type="text2" 
                    id="nit"
                    placeholder="Nit o Nº Documento"
                    required
                    onChange={(e) => setNit(e.target.value)}
                    
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
                <div className="input-button">

                <button type="submit" className="button ">Iniciar Sesión</button>
                <br></br>
                <br></br>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p>
                <p><a className="link" href="/forgotPassword"> ¿Olvidaste tu contraseña? </a></p>
                <p>¿No tienes una cuenta?<a className="link" href="/registrarse"> Solicita tu cuenta </a></p>
                </div>
            </form> 
             
        </div>
    )
}

export default ZonaClientes
