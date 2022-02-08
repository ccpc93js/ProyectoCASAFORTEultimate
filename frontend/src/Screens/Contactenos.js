import React,{Component} from 'react';
import axios from 'axios';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Helmet } from 'react-helmet'

class Contactenos extends Component {
    nombre = React.createRef();
    email = React.createRef();
    telefono = React.createRef();
    asunto = React.createRef();
    mensaje = React.createRef();

    state ={
        nombre:"",
        email: "",
        telefono:"",
        asunto: "",
        mensaje: ""
    };

    comprobarCambios = () =>{
        var nombre = this.nombre.current.value;
        var email = this.email.current.value;
        var telefono = this.telefono.current.value;
        var asunto = this.asunto.current.value;
        var mensaje = this.mensaje.current.value;
        this.setState({
            nombre: nombre,
            email: email,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje
        })
    }

    constructor(){
        super();
        this.enviarEmail = this.enviarEmail.bind(this);
    }

    async enviarEmail(){
        // e.preventDefault();

               alert( 
               
                    "su solicitud a sido enviada correctamente!"
               )
      
       

        const {nombre, email, telefono, asunto, mensaje} = this.state;
        await axios.post("/api/emails/contactenos",{
            nombre,
            email,
            telefono,
            asunto,
            mensaje
        });

 

    }
    

    render() {
    const title = "Error 404"

    return (

        <>

        {
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
                <meta name="rating" content="General" />
            </Helmet>
        }
        <div>
            <div className="contacto">
                <img src="../enlaces/img/clientes.png" alt=""/>
            </div>

            <p className="contactanos">
             Elige cualquiera de los siguientes canales para comunicarte con nosotros
            </p>

            <div className="asesor">

            <p className="linea">

             <b>Linea comercial</b>

             </p>

            <p className="comunicate">
                  Comunicate con un asesor y conoce todas las opciones que tenemos para tu negocio.
            </p>

            <p className="cel">
            <b>+57 304 6486898</b>
            </p>

            <a href="#" className="whatsapp">
                <i className=""><WhatsAppIcon/></i>
            </a>

            </div>

            <div className="content">

                <h1 className="contacto">Cont&aacute;ctanos</h1>
            
                <div className="contact-wrapper">
                <div className="contact-form">

                    <form  onSubmit={this.enviarEmail}>
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                             type="text" 
                             name="nombre"
                             onChange={this.comprobarCambios}
                             ref={this.nombre}
                              />
                        </p>
                            
                        <p>
                            <label htmlFor="email">Correo Electronico</label>
                            <input
                             type="email" 
                             name="email"
                             onChange={this.comprobarCambios}
                             ref={this.email}
                             />  
                        </p>

                        <p>
                            <label htmlFor="telefono">Tel&eacute;fono</label>
                            <input 
                            type="tel" 
                            name="telefono"
                            onChange={this.comprobarCambios}
                             ref={this.telefono}
                            />
                        </p>

                        <p>
                            <label htmlFor="asunto">Asunto</label>
                            <input
                             type="text" 
                             name="asunto"
                             onChange={this.comprobarCambios}
                             ref={this.asunto}
                             />
                        </p>

                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                             rows="5"
                             name="mensaje"
                             onChange={this.comprobarCambios}
                             ref={this.mensaje}
                            ></textarea>
                        </p>

                        <div className="button-contactenos">

                         <div className="button-center">
                         <button type="submit"  className="button">Enviar</button>
                        </div>

                        
                        </div>

                       
                        
                    </form>

                </div> 

                </div>

            </div>
        </div>
        </>

    )
}
}

export default Contactenos;
