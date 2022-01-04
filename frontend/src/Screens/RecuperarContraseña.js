import React, { useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

// import { Link } from 'react-router-dom';
import { mostrarConfirmContrasena, mostrarContrasena } from '../components/MostrarContrasena';
import axios from 'axios';


function RecuperarContraseña(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
console.log(password)


  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/signin';

  const id = props.match.params.id
  console.log(id)
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert('contraseña y confirmar contraseña no coinciden');
    } else {

      const resetPassword = async(id, password)=>{
          try {
          await axios.put("/api/users/reset",{
    
            id,
            password
               
          }).then(res =>{
              props.history.push(redirect);
           
          });
          
        } catch (error) {
          const message =
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
          console.log(message)    
        }
      }
        
        
      resetPassword(id, password);
      
      alert("contraseña actualizada correctamete")
  
      };


  };




    return (
        <div className="zona-form">
            <div className="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>
             
            <form className="formulario" onSubmit={submitHandler}>
                 <h1>Recuperar contraseña</h1>
            <div className="loading-div">

            </div>

                <div className="input-contenedor">
                    <i className=""><LockIcon/></i>
                    <input 
                    type="password" 
                    id="password"
                    placeholder="Nueva  contraseña"
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
                <div className="input-button">

                <button type="submit" className="button block">Actualizar contraseña</button>
                <br></br>
                <br></br>
                {/* <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p> */}
                <p>¿No tienes una cuenta?<a className="link" href="/registrarse"> Solicita tu cuenta </a></p>
               
            
                </div>
            </form> 
             
        </div>
    )
}

export default RecuperarContraseña;
