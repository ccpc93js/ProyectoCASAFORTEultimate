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

export default emailRouter;
