import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerInfo } from '../../actions/userActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Registrarse(props) {
    const [name, setName] = useState('');
    const [tDocument, setTD] = useState('');
    const [nDocument, setND] = useState('');
    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [cel, setCel] = useState('');
    const [tipoClient, setTipoClient] = useState('');

    const userRegisterInfo = useSelector((state) => state.userRegisterInfo);
    const { /*userInfo*/ loading, error } = userRegisterInfo;
    
    
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(registerInfo(name, tDocument ,nDocument ,department, city, adress, email, tel, cel, tipoClient));
    const messege =()=>{
       if (e) {

           props.history.push('/messegeRegistered');
       }
 

    }
    messege();

    const enviarEmail = async(name, tDocument ,nDocument ,department, city, adress, email, tel, cel, tipoClient)=>{
        await axios.post("/api/emails/registrarse",{
            name,
            tDocument,
            nDocument,
            department, 
            city, 
            adress, 
            email, 
            tel, 
            cel, 
            tipoClient
        });
    }

    enviarEmail(name, tDocument ,nDocument ,department, city, adress, email, tel, cel, tipoClient);

    };

    // const {paises, setPaises} = useState([])
    // const obtenerPaises = async() =>{
    //     const {data} = await axios.get("http://battuta.medunes.net/api/country/all/?key=4a6598ecb99776304b3e8c804ae1617c")
    //     setPaises(data)
    // }

    const [dataDyC, setDataDyC] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    console.log(departamentos)
    const obtenerDepartamentosYciudades = async() =>{
        try{
        const {data} = await axios.get("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json")
        console.log(data)

        setDataDyC(data)
        const departamentos = data.filter(x =>{
            if("departamento")
            return (x.departamento === "departamento")
        })
        setDepartamentos(departamentos)

        // const ciudades = data.filter(x =>{
        //     if("ciudades")
        //     return (x.ciudades === "ciudades")
        // })
        }catch(error){
            console.log(error)
        }
    };

    obtenerDepartamentosYciudades();
    console.log(departamentos);

    const ciudadesSelect = (e) =>{
        let departamento = e.target.value;
        setCiudades(dataDyC.slice().filter((x)=>{

            if(departamento){
            return (x.ciudades.find(x=>x===departamento ) === departamento)
            }
        })
        )

    }

    return (
        <div>
             <div className="contacto">
            <img src="../enlaces/img/contacto.png" alt=""/>
        </div>

        <form className="formulario" onSubmit={submitHandler}>
            <h1>¿Tienes una Ferreter&iacute;a y deseas ser nuestro cliente?</h1>
            <br></br>
            <h3>Diligencia el siguiente formulario</h3> 
            {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div className="contenedor">
                <div className="input-contenedor">
                    <i className=""><PersonIcon/></i>
                    <input 
                    type="text2"
                    required
                    placeholder="Nombre o Raz&oacute;n Social"
                    onChange={(e) => setName(e.target.value)}

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
                        {departamentos.map(x=>{
                        <option value={x}>{x}</option>

                        })}
                    </select>
                </div>

                <div className="input-contenedor">
                <i className=""><LocationOnIcon/></i>
                    <select
                     required
                     type="text2" 
                     placeholder="Ciudad"
                     onChange={(e) => setCity(e.target.value)}
                     
                     >
                        <option  selected disables >Seleccionar ciudad</option>
                        {/* {ciudades.map(x=>{
                        <option value={x}>{x}</option>

                        })} */}
                     </select>
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
                    <i className=""><EmailIcon/></i>
                    <input 
                    required
                    type="email" 
                    placeholder="Correo Electronico"
                    onChange={(e) => setEmail(e.target.value)}
                    
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
               
                <div className="button-contactenos">
                <div className="button-center">
                <button type="submit"  className="button">Solicitar cuenta</button>
                </div>
                </div>
                <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de Privacidad.</p>
                <p>¿Ya tienes una cuenta?<a className="link" href="/signin">Iniciar Sesión</a></p>
            </div>
        </form>  
       
        </div>
    )
}

export default Registrarse
