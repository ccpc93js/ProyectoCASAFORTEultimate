import React, { /*useEffect*/ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
// import { Link } from 'react-router-dom';
import { register } from '../../actions/userActions';


function LoginRegistro(props) {
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  // const redirect = props.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { /*userInfo*/ loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('contraseña y confirmar contraseña no coinciden');
      } else {
        dispatch(register(name, nit, email, password));
      }  
    };
  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [props.history, redirect, userInfo]);

    return (
        <div>
            <div class="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>
             
            <form class="formulario" onSubmit={submitHandler}>
                 <h1>Login Registro</h1>
                  <br/>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                <div class="input-contenedor">
                    <i class="fas fa-user icon"></i>
                    <input 
                    type="text2" 
                    id="name"
                    placeholder="Nombre o empresa"
                    required
                    onChange={(e) => setName(e.target.value)}
                    
                    />
                </div>

                <div class="input-contenedor">
                    <i class="fas fa-user icon"></i>
                    <input 
                    type="text2" 
                    id="nit"
                    placeholder="Nit sin digito de verificaci&oacute;n"
                    required
                    onChange={(e) => setNit(e.target.value)}
                    
                    />
                </div>

                <div class="input-contenedor">
                    <i class="fas fa-user icon"></i>
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>

                <div class="input-contenedor">
                    <i class="fas fa-key icon"></i>
                    <input 
                    type="password" 
                    id="password"
                    placeholder="Contraseña"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div class="input-contenedor">
                    <i class="fas fa-key icon"></i>
                    <input 
                    type="password" 
                    id="confirmPassword"
                    placeholder="Confirmar contraseña"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value="Registrar" class="button"/>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p>
                <p>¿No tienes una cuenta?<a class="link" href="/Zona_clientes">Solicita tu cuenta</a></p>
               
            
            </form>  
        </div>
    )
}

export default LoginRegistro
