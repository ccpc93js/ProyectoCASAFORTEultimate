import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";
// import nodemailer from "nodemailer";

// import dataProductos from './data.js'
// import dataCategorias from './data.js'
// import dataSubcategorias from './data.js'
// import dataMarcas from './data.js'

import mongoose from 'mongoose';
import dotenv from 'dotenv'
import path from 'path';

import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import emailRouter from './routers/emailRouter.js';
import userInfoRouter from './routers/userInfoRouter.js';


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true }));

    //process.env.MONGODB_URL ||  'mongodb://localhost/casaforte'
    mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://casaforteDataBase:casaforte2525@cluster0.m96b5.mongodb.net/casa-forte?retryWrites=true&w=majority"
    , {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

//enviar email
// app.post("/api/form", (req,res) =>{
//     nodemailer.createTestAccount((err, account)=>{
//         const htmlEmail = `
//             <h3>Email enviado desde contactanos Casaforte</h3>
//             <ul>
//                 <li>Nombre:${req.body.nombre}</li>
//                 <li>Email:${req.body.email}</li>
//                 <li>Telefono:${req.body.telefono}</li>
//                 <li>Asunto:${req.body.asunto}</li>
//             </ul>
//             <h3>Mensaje</h3>
//             <p>${req.body.mensaje}</p>

//         `;
//         let transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port:587,
//             auth:{
//                 user:"ferreteriacasaforte@gmail.com", // el email del servicio que va a utilizar(en este caso Gmail)
//                 pass:"erzbjbjocftugsgo"// la contraseña dedicho SMTP
//             }
//         });

//         let mailOptions = {
//             form:"ferreteriacasaforte@gmail.com", //quien manda el email
//             to: "ferreteriacasaforte@gmail.com",// el email de destino
//             replyTo: "ferreteriacasaforte@gmail.com",
//             subject: req.body.asunto, // el asunto del email
//             text: req.body.mensaje, // el mensaje
//             html: htmlEmail // la parte del HTML del email
//         };

//         transporter.sendMail(mailOptions,(err,info)=>{
//             if(err){
//                 return console.log(err);
//             }
//             console.log("Mensaje enviado: %s", info.mensaje);
//             console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
//         });
//     });
// });

//fin enviar email


//base de datos

// app.get('/api/productos', (req,res)=>{
//     res.send(dataProductos.productos)
// });
// app.get('/api/categorias', (req,res)=>{
//     res.send(dataCategorias.categorias)
// });
// app.get('/api/subcategorias', (req,res)=>{
//     res.send(dataSubcategorias.subcategorias)
// });
// app.get('/api/marcas', (req,res)=>{
//     res.send(dataMarcas.marcas)
// });

// app.get('/api/productos/:id', (req,res)=>{
//   const producto = dataProductos.productos.find((x)=> x._id === req.params._id)
//   if(producto){
//       res.send(producto);
//   }else{
//       res.status(404).send({message: 'Producto no encontrado'});
//   }
// });


//fin base de datos

//users
app.use('/api/users', userRouter);

app.use('/api/usersInfo', userInfoRouter)

//fin users

//products
app.use('/api/productos', productRouter);

//fin products

//order
app.use('/api/orders', orderRouter)
//fin order

app.get('/api/config/paypal', (req,res) =>{
    res.send(process.env.PAYPAL_CLIENTID || 'sb');
})

app.use('/api/emails', emailRouter);


app.use('/api/uploads', uploadRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);



app.get('/', (req,res)=>{
    res.send('Servidor listo');
});



app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
});

const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})