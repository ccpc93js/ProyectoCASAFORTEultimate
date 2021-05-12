import express from 'express';
import nodemailer from "nodemailer";

// import expressAsyncHandler from 'express-async-handler';
// import {generateToken, isAdmin, isAuth} from '../utils.js'


const emailRouter = express.Router();

emailRouter.post("/contactenos", (req,res) =>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
            <h3>Email enviado desde contactanos Casaforte</h3>
            <ul>
                <li>Nombre:${req.body.nombre}</li>
                <li>Email:${req.body.email}</li>
                <li>Telefono:${req.body.telefono}</li>
                <li>Asunto:${req.body.asunto}</li>
            </ul>
            <h3>Mensaje</h3>
            <p>${req.body.mensaje}</p>

        `;
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port:587,
            auth:{
                user:"ferreteriacasaforte@gmail.com", // el email del servicio que va a utilizar(en este caso Gmail)
                pass:"erzbjbjocftugsgo"// la contraseña dedicho SMTP
            }
        });

        let mailOptions = {
            form:"ferreteriacasaforte@gmail.com", //quien manda el email
            to: "ferreteriacasaforte@gmail.com",// el email de destino
            replyTo: "ferreteriacasaforte@gmail.com",
            subject: req.body.asunto, // el asunto del email
            text: req.body.mensaje, // el mensaje
            html: htmlEmail // la parte del HTML del email
        };

        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                return console.log(err);
            }
            console.log("Mensaje enviado: %s", info.mensaje);
            console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
        });
    });
});

emailRouter.post("/registrarse", (req,res) =>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
            <h2>Ferreteria Casa forte</h2>
            <br></br>
                <p>
                
               estimado ${req.body.name} con correo  ${req.body.email} le damos la bienvenidad a ferreteria casa forte
                <br></br>
                pronto nos contactaremos con usted para validar el registro!

               

                </p>

            


        `;


    

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port:587,
            auth:{
                user:"ferreteriacasaforte@gmail.com", // el email del servicio que va a utilizar(en este caso Gmail)
                pass:"erzbjbjocftugsgo"// la contraseña dedicho SMTP
            }
        });

        let mailOptions = {
            form:"ferreteriacasaforte@gmail.com", //quien manda el email
            to: req.body.email,// el email de destino
            replyTo: req.body.email,
            subject: "Peticion de registro casa forte", // el asunto del email
            text: req.body.name, // el mensaje
            html: htmlEmail // la parte del HTML del email
        };



        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                return console.log(err);
            }
            console.log("Mensaje enviado: %s", info.mensaje);
            console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
        });

        const htmlEmailCasaForte = `
        <h3>Email enviado desde registrarse Casaforte</h3>
        <br></br>
            <p>
            
           el usuario ${req.body.name} con correo  ${req.body.email} ha sido registrado para su validacion y creacion de usuario
            <br></br>
            validar registro!

           

            </p>

        


    `;

        let transporterCasaForte = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port:587,
            auth:{
                user:"ferreteriacasaforte@gmail.com", // el email del servicio que va a utilizar(en este caso Gmail)
                pass:"erzbjbjocftugsgo"// la contraseña dedicho SMTP
            }
        });

        let mailOptionsCasaForte = {
            form:"ferreteriacasaforte@gmail.com", //quien manda el email
            to: "ferreteriacasaforte@gmail.com",// el email de destino
            replyTo: "ferreteriacasaforte@gmail.com",
            subject: "usuario registrado revisar en informacion de usuarios registrados", // el asunto del email
            text: "usuario registrado revisar en informacion de usuarios registrados", // el mensaje
            html: htmlEmailCasaForte // la parte del HTML del email
        };

        transporterCasaForte.sendMail(mailOptionsCasaForte,(err,info)=>{
            if(err){
                return console.log(err);
            }
            console.log("Mensaje enviado: %s", info.mensaje);
            console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
        });
    });
});

export default emailRouter;
