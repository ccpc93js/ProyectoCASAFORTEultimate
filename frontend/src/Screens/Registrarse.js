import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerInfo } from '../actions/userActions';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';


import dataDyC from '../components/enlaces/dataDyC'
import { buttonClose } from '../components/ButtonClose';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function Registrarse(props) {
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
    const { success, loading, error } = userRegisterInfo;
    const handleCopExitosaModalOpen = () => {
        const MCE_C = document.querySelector(".Modal-compraExitosa-container")
        const MCE = document.querySelector(".Modal-compraExitosa")

        MCE_C.classList.toggle("ModalCExitosa-Container-Close")
        MCE.classList.toggle("ModalCExitosa-Close")

    }

    const handleCopExitosaModalClose = () => {
        const MCE_C = document.querySelector(".Modal-compraExitosa-container")
        const MCE = document.querySelector(".Modal-compraExitosa")

        MCE_C.classList.toggle("ModalCExitosa-Container-Close")
        MCE.classList.toggle("ModalCExitosa-Close")
        props.history.push('/');


    }


    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        try {
            dispatch(registerInfo(name, tDocument, nDocument, department, city, adress, email, tel, cel, tipoClient));

        } catch (error) {
            console.log(error)
        }

        // if(success){
        //     handleCopExitosaModalOpen()
        //     messege();
        // }


        // const messege = () => {


        //     window.addEventListener("click", (e) => {
        //         const MCE_C = document.querySelector(".Modal-compraExitosa-container");
        //         const MCE = document.querySelector(".Modal-compraExitosa")
        //         const btnClose = document.querySelector(".Modal-compraExitosa__ClearIcon")


        //         setTimeout(() => {

        //             if (e.target === MCE_C || btnClose) {
        //                 MCE_C.classList.toggle("ModalCExitosa-Container-Close")
        //                 MCE.classList.toggle("ModalCExitosa-Close")
        //                 props.history.push('/');
        //             }
        //         }, 1000)

        //     })


        // }

        const enviarEmail = async (name, tDocument, nDocument, department, city, adress, email, tel, cel, tipoClient) => {
            await axios.post("/api/emails/registrarse", {
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

        enviarEmail(name, tDocument, nDocument, department, city, adress, email, tel, cel, tipoClient);

    };



    const messege = () => {


        window.addEventListener("click", (e) => {
            const MCE_C = document.querySelector(".Modal-compraExitosa-container");
            const MCE = document.querySelector(".Modal-compraExitosa")
            const btnClose = document.querySelector(".Modal-compraExitosa__ClearIcon")


            setTimeout(() => {

                if (e.target === MCE_C || btnClose) {
                    MCE_C.classList.toggle("ModalCExitosa-Container-Close")
                    MCE.classList.toggle("ModalCExitosa-Close")
                    props.history.push('/');
                }
            }, 1000)

        })


    }
    const compraExitosahandler = () => {
        return (

            <div className="Modal-compraExitosa-container ModalCExitosa-Container-Close">
                <div className="Modal-compraExitosa ModalCExitosa-Close">
                    <button
                        className="ClearIcon Modal-compraExitosa__ClearIcon"
                        onClick={handleCopExitosaModalClose}
                        color="inherit"
                    >
                        <i className="ClearIcon">
                            <ClearIcon />

                        </i>

                    </button>
                    <div className="Modal-compraExitosa__img">
                        <img className="mensajeRegistro-img" src='https://res.cloudinary.com/casaforte/image/upload/v1622647550/Icon/Check_Circle_vtpbrp.jpg' alt="Check_Circle" />
                    </div>
                    <p className="Modal-mensajeRegistro">
                        Tu registro a sido exitoso nos contactaremos contigo!
                    </p>
                </div>

            </div>
        )
    }


    // const {paises, setPaises} = useState([])
    // const obtenerPaises = async() =>{
    //     const {data} = await axios.get("http://battuta.medunes.net/api/country/all/?key=4a6598ecb99776304b3e8c804ae1617c")
    //     setPaises(data)
    // }

    const data = dataDyC.DyC

    // const [dataDyC, setDataDyC] = useState([]);
    const [departamentos, setDepartamentos] = useState(data);
    const [ciudades, setCiudades] = useState([]);


    // obtenerDepartamentosYciudades();

    const ciudadesSelect = (e) => {
        let departamento = e.target.value;
        setCiudades(data.filter((x) => {

            if (departamento) {
                return (x.ciudades)
            }
        })
        )

    }

    return (
        <div className="zona-form">
            {compraExitosahandler()}
            <div className="contacto">
                <img src="../enlaces/img/contacto.png" alt="" />
            </div>

            <form className="formulario" onSubmit={submitHandler}>
                <h1>??Tienes una Ferreter&iacute;a y deseas ser nuestro cliente?</h1>
                <br></br>
                <h3>Diligencia el siguiente formulario</h3>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                {success && <MessageBox variant="success">Tu registro a sido exitoso nos contactaremos contigo! {" "} <button className="buttonClose" onClick={()=>buttonClose("/")}>X</button></MessageBox>}
                {/* {success && handleCopExitosaModalOpen()} */}


                <div className="contenedor">
                    <div className="input-contenedor">
                        <i className=""><PersonIcon /></i>
                        <input
                            type="text2"
                            autoFocus
                            required
                            placeholder="Nombre o Raz&oacute;n Social"
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><PostAddIcon /></i>
                        {/* <input type="text2" placeholder="Tipo de Documento"/> */}
                        <select
                            required
                            type="text2"
                            onChange={(e) => setTD(e.target.value)}

                        >
                            <option disabled selected >Selecciona el tipo de documento</option>
                            <option value="Nit sin dijito de verificacion">Nit sin dijito de verificacion</option>
                            <option value="Cedula de ciudadania" >Cedula de ciudadania</option>
                            <option value="Cedula de ciudadania" >Cedula de extranjeria</option>
                        </select>
                    </div>

                    <div className="input-contenedor">
                        <i className=""><PostAddIcon /></i>
                        <input
                            name="name"
                            required
                            type="number"
                            placeholder="N?? Documento"
                            onChange={(e) => setND(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><LocationOnIcon /></i>
                        <select
                            name="department"
                            required
                            type="text2"
                            placeholder="Departamento"
                            onChange={(e) => setDepartment(e.target.value)}

                        >
                            <option disabled selected >Seleccionar departamento</option>
                            {departamentos.map(x =>
                                <option key={x.departamento} value={x.departamento}>{x.departamento}</option>

                            )}
                        </select>
                    </div>

                    <div className="input-contenedor">
                        <i className=""><LocationOnIcon /></i>
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
                            name="city"
                            required
                            type="text2"
                            placeholder="Ciudad"
                            onChange={(e) => setCity(e.target.value)}



                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><LocationOnIcon /></i>
                        <input
                            name="adress"
                            required
                            type="text2"
                            placeholder="Direcci&oacute;n"
                            onChange={(e) => setAdress(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><EmailIcon /></i>
                        <input
                            name="email"
                            required
                            type="email"
                            placeholder="Correo Electronico"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><PhoneIcon /></i>
                        <input
                            name="tel"
                            required
                            type="number"
                            placeholder="Telefono"
                            onChange={(e) => setTel(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><PhoneIphoneIcon /></i>
                        <input
                            name="cel"
                            required
                            type="number"
                            placeholder="Celular"
                            onChange={(e) => setCel(e.target.value)}

                        />
                    </div>

                    <div className="input-contenedor">
                        <i className=""><AccountCircleIcon /></i>
                        {/* <input type="text2" placeholder="Selecciona el tipo de cliente"/> */}
                        <select
                            name="tipoClient"
                            required
                            type="text2"
                            onChange={(e) => setTipoClient(e.target.value)}

                        >
                            <option disabled selected>Selecciona el tipo de cliente</option>
                            <option value="Ferreteria" >Ferreteria</option>
                            <option value="Empresa" >Empresa</option>
                            <option value="Persona" >Persona</option>
                        </select>

                    </div>

                    <div className="button-contactenos">
                        <div className="button-center">
                            <button type="submit" className="button">Solicitar cuenta</button>
                        </div>
                    </div>
                    <p>Al registrarte, aceptas nuestras Condiciones de uso y Pol??tica de Privacidad.</p>
                    <p>??Ya tienes una cuenta?<a className="link" href="/signin"> Iniciar Sesi??n </a></p>
                </div>
            </form>

        </div>
    )
}


