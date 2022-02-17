import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";

import mongoose from 'mongoose';
import dotenv from 'dotenv'
import path from 'path';
// import fileupload from 'express-fileupload';


import productRouter from '../routers/productRouter.js';
import userRouter from '../routers/userRouter.js';
import orderRouter from '../routers/orderRouter.js';
import uploadRouter from '../routers/uploadRouter.js';
import emailRouter from '../routers/emailRouter.js';
import userInfoRouter from '../routers/userInfoRouter.js';

const {MONGODB_URL, MONGODB_URL_TEST, NODE_ENV } = process.env

const connectionStreing =  NODE_ENV === 'test' 
? MONGODB_URL_TEST
: MONGODB_URL 

dotenv.config();


const app = express();
// app.use(fileupload({useTempFiles: true}));
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(cors());

    //process.env.MONGODB_URL ||  'mongodb://localhost/casaforte'
mongoose.connect(connectionStreing || "mongodb+srv://casaforteDataBase:casaforte2525@cluster0.m96b5.mongodb.net/casa-forte-pruebas?retryWrites=true&w=majority"
    , {
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 



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
app.use(express.static(path.join(__dirname, 'frontend','build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'frontend','build', 'index.html'))
);



app.get('/', (req,res)=>{
    res.send('Servidor listo');
});


app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
});


export default app
