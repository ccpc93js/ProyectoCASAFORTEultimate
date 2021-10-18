import React, { useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios';


function ContrasenaOlvidada() {
  const [email, setEmail] = useState('');
  const [emailSend, setEmailSend] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const forgotPassword = async (email) => {
      try {
        await axios.post("/api/emails/forgotPassword", {

          email

        }).then(() => {
          setEmailSend(true)
        });


      } catch (error) {
        console.log(error)
      }
    }
    forgotPassword(email);
    setEmailSend(true)





  };




  return (
    <div>
      {
        (emailSend) ?


          <div className="zona-form">
            <div className="contacto">
              <img src="../enlaces/img/clientes.png" alt="" />
            </div>

            <form className="formulario" onSubmit={submitHandler}>

              <div className="input-button">

                <p style={{fontSize:"20px"}}>revisa tu email, hemos enviado instrucciones para la recuperacion de tu contraseña!</p>

              </div>
            </form>

          </div>

          :

          <div className="zona-form">
            <div className="contacto">
              <img src="../enlaces/img/clientes.png" alt="" />
            </div>

            <form className="formulario" onSubmit={submitHandler}>
              <h1>Olvidaste tu contraseña?</h1>
              <div className="loading-div">


              </div>

              <div className="input-contenedor">
                <i className=""><EmailIcon /></i>
                <input
                  type="email"
                  id="email"
                  autoFocus
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className="input-button">

                <button type="submit" className="button ">Enviar</button>
                <br></br>
                <br></br>
                {/* <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p> */}
                <p>¿No tienes una cuenta?<a className="link" href="/registrarse"> Solicita tu cuenta </a></p>


              </div>
            </form>

          </div>
      }
    </div>


  )
}

export default ContrasenaOlvidada;
