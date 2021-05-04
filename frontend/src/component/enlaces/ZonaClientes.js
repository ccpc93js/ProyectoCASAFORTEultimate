import React, { useEffect, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
// import { Link } from 'react-router-dom';
import { signin } from '../../actions/userActions';


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
        <div>
            <div className="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>
             
            <form className="formulario" onSubmit={submitHandler}>
                 <h1>Inicia Sesión</h1>
            
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

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
                    <i className=""><PersonIcon/></i>
                    <input 
                    type="text2" 
                    id="nit"
                    placeholder="Nit sin digito de verificaci&oacute;n"
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
                </div>
                <div className="input-button">

                <input type="submit" value="Iniciar Sesión" className="button "/>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p>
                <p>¿No tienes una cuenta?<a className="link" href="/registrarse">Solicita tu cuenta</a></p>
               
            
                </div>
            </form>  
        </div>
    )
}

export default ZonaClientes
