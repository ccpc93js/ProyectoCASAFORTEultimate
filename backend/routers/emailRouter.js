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


        <div  class="CE-container" style="
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style:none;
        box-sizing:border-box;
        text-align:center;
        color: #afadad;

        ">
          
        <div class="CE__mensaje-container" style="
        margin:auto;
        margin-top:3rem;
       /* display: flex;
        flex-direction:column;
        justify-content:center;*/
        margin-bottom:30px;
        ">
          <div class="CE__title" style="
          margin-bottom:30px;
          text-align:center;

          ">

            <h2 >Ferreteria Casa forte</h2>
          </div>
            <div  class="CE__img" style="
            margin-bottom:30px;
            text-align:center;

            ">
              <img  class="CE__casaforte" src="https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png" alt="casaforte"  style="
              width:18rem;
              margin-top:2rem;
              text-align:center;

              "/>
            </div>
            <br></br>
            <p  style="
            text-align:center;
            font-size:20px;
            ">
                
               estimado ${req.body.name} con correo  ${req.body.email} le damos la bienvenidad a ferreteria casa forte
                <br></br>
                pronto nos contactaremos con usted para validar el registro!

                </p>
          </div>
          </div>



            


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
        <div  class="CE-container" style="
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style:none;
        box-sizing:border-box;
        text-align:center;
        color: #afadad;

        ">
          
        <div class="CE__mensaje-container" style="
        margin:auto;
        margin-top:3rem;
       /* display: flex;
        flex-direction:column;
        justify-content:center;*/
        margin-bottom:30px;
        ">

        <div  class="CE__img" style="
        margin-bottom:30px;
        text-align:center;

        ">
          <img  class="CE__casaforte" src="https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png" alt="casaforte"  style="
          width:18rem;
          margin-top:2rem;
          text-align:center;

          "/>
        </div>
        <div class="CE__title" style="
        margin-bottom:30px;
        text-align:center;

        ">

        <h3>Email enviado desde registrarse Casaforte</h3>
        </div>
        <br></br>
        <p  style="
        text-align:center;
        font-size:20px;
        ">
            
           el usuario ${req.body.name} con correo  ${req.body.email} ha sido registrado para su validacion y creacion de usuario
            <br></br>
            validar registro!

           

            </p>

        
            </div>
            </div>


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


emailRouter.post("/compraExitosa", (req,res) =>{
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `


        <style>
        * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }
    
    .CE__mensaje-container{
        margin: auto;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .CE__mensaje-container div{
        margin-bottom: 30px;
    
    }
    
    .CE__casaforte{
        width: 18rem;
        margin-top: 2rem;
      
      }
    
    .CE__title{
        text-align: center;
    }
    
    .CE__frase p{
    
        text-align: center;
        font-size: 20px;
    }
    
    .CE__pedido{
    text-align: center;
    }
    .CE__pedido p{
        font-size: 20px;
        
    }
    
    .CE__visitaTienda {
        text-align: center;
    }
    
    .CE__visitaTienda a{
    border: solid 2px #2c2c3d ;
    border-radius: 2px;
    background: #2c2c3d;
    color: #ffff;
    font-size: 20px;
    padding: 8px;
    
    }
    
    
    
    /* resumen del pedido */
    
    
    .orderScreen-container{
        padding-top: 3%;
    }
    
    .col-2 {
        flex: 2 1 50rem;
    }
    
    .col-1 {
        flex: 1 1 25rem;
    }
    .card-body {
        padding: 1rem;
    }
    .card {
        border: 0.1rem #bbf3ea solid;
        background-color: #ffffff;
        border-radius: 0.5rem;
        margin: 1rem;
    }
    
    .card-body >* {
        margin-bottom: 0.5rem;
    }
    
    ul, li {
        list-style-type: none;
    }
    ul, li {
        text-decoration: none;
    }



    .row {
        display: flex;
        /* flex-wrap: wrap; */
        flex-flow: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 2rem;
    }
    
    
    .envioINfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
    
    }
    .envioINfo h3{
    margin: auto;
    text-align: start;
    
    }
    .envioINfo p{
    display: inline-block;
    margin: auto;
    text-align: start;
    
    }
        
    </style>  


        
        <div  class="CE-container" style="
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style:none;
        box-sizing:border-box;
        text-align:center;
        color: #a09d9d;

        ">
          
        <div class="CE__mensaje-container" style="
        margin:auto;
        margin-top:3rem;
       /* display: flex;
        flex-direction:column;
        justify-content:center;*/
        margin-bottom:30px;
        color: #a09d9d;

        ">
          <div class="CE__title" style="
          margin-bottom:30px;
          text-align:center;

          ">

            <h2 style=" 
            color: #a09d9d;
            ">Ferreteria Casa forte</h2>
            </div>

            <div  class="CE__img" style="
            margin-bottom:30px;
            text-align:center;

            ">
              <img  class="CE__casaforte" src="https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png" alt="casaforte"  style="
              width:18rem;
              margin-top:2rem;
              text-align:center;

              "/>
            </div>

            <div class="CE__frase" style="
            margin-bottom:30px;
            ">

            <p  style="
            text-align:center;
            font-size:20px;
            color: #a09d9d;

            ">
            ${req.body.name}<br />
              Compra exitosa, gracias por su compra! <br /> 
              el proveedor se comunicara con usted para la entrega.
            </p>
            </div>

            <div class="CE__pedido" style="
            margin-bottom: 30px;
            text-align: center;

            "> 

            <p style="
             font-size: 20px;
            
            "> Pedido ${req.body.order}</p>
            </div>


            <div class="CE__visitaTienda" style="
            margin-bottom: 30px;
            text-align: center;

            ">

            <a   href="https://casaforte.herokuapp.com/order/${req.body.order}" style="
            border: solid 2px #2c2c3d ;
            border-radius: 4px;
            background: #2c2c3d;
            color: #ffff;
            font-size: 20px;
            padding: 8px;
            text-decoration: none;

            ">Ver pedido</a>
            </div>
        </div>
        <div class="CE__visitaTienda" style="
        margin-bottom: 30px;
        text-align: center;

        ">

        <a   href="https://casaforte.herokuapp.com" style="
        border: solid 2px #2c2c3d ;
        border-radius: 4px;
        background: #2c2c3d;
        color: #ffff;
        font-size: 20px;
        padding: 8px;
        text-decoration: none;

        ">Visitar nuestra tienda</a>
        </div>
    </div>

    </div> 

               

    `
      /*  <div class="orderScreen-container"  style="
        
        padding-top: 3%;
        
        ">
          <h3>Resumen del pedido</h3>
          <div class="row top" style="
          display: flex;
          flex-flow: wrap;
          justify-content: space-between;
          align-items: flex-start;
          align-items: center;
          margin: 2rem;
          ">
            <div class="col-2" style="
            flex: 2 1 50rem;
            
            "> 
              <ul style="
              list-style-type: none;
              
              ">
                <li styile="
                list-style-type: none;
                
                ">
                  <div class="card card-body" style="
                    padding: 1rem;
                    border: 0.1rem #bbf3ea solid;
                    background-color: #ffffff;
                    border-radius: 0.5rem;
                    margin: 1rem;
                    margin-bottom: 0.5rem;

                  
                  ">
                    <strong>Direccion de envio</strong>
                    <h3 class="envioINfo" style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: auto;
                    text-align: start;
                    ">
                     <p style="
                     display: inline-block;
                     margin: auto;
                     text-align: start;
                     "> {req.body.order.shippingAddress.fullName}</p>
                     <p style="
                     display: inline-block;
                     margin: auto;
                     text-align: start;
                     "> {req.body.order.shippingAddress.address}</p>
                     <p style="
                     display: inline-block;
                     margin: auto;
                     text-align: start;
                     ">{req.body.order.shippingAddress.city}</p>
                     <p style="
                     display: inline-block;
                     margin: auto;
                     text-align: start;
                     ">{req.body.order.shippingAddress.postalCode}</p>
                     <p style="
                     display: inline-block;
                     margin: auto;
                     text-align: start;
                     ">{req.body.order.shippingAddress.country}</p> 
                    </h3>
                   
                  </div>
                </li>
                <li style="
                list-style-type:none;
                
                ">
                  <div class="card card-body" style="
                  padding:1rem;
                  border:0.1rem #bbf3ea solid;
                  background-color:#ffffff;
                  border-radius:0.5rem;
                  margin:1rem;
                  margin-bottom:0.5rem;

                ">
                    <strong>Pago</strong>
                    <h3>
                      <strong>Metodo: </strong> 
                      {/* {order.paymentMethod} 
                    </h3>

                  </div>
                </li>
                <li style="
                list-style-type:none;
                
                ">
                  <div class="card card-body" style="
                  padding:1rem;
                  border:0.1rem #bbf3ea solid;
                  background-color:#ffffff;
                  border-radius:0.5rem;
                  margin:1rem;
                  margin-bottom:0.5rem;

                ">
                    <strong>Articulos</strong>
                    <ul style="
                    list-style-type:none;
                    
                    ">
                        <li key="key" style="
                        list-style-type:none;
                        
                        ">
                          <div class="row" style="
                          display: flex;
                          flex-flow: wrap;
                          justify-content: space-between;
                          align-items: center;
                          margin: 2rem;
                          ">
                            <div>
                              <img
                                // src="{req.body.item.imagen}"
                                // alt={req.body.item.info}
                                class="small"
                              ></img>
                            </div>
                            <div class="min-20" style="
                            min-width: 20rem;
                            ">
                               <a href=/product/{req.body.item.producto}>
                                {req.body.item.info}
                              </a> 
                            </div>
                            
                            <div>
                            {/* {item.qty} x {item.precio} = {item.qty * item.precio} 
                            </div>
                          </div>
                        </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>


            <div class="col-1" style="
              flex: 1 1 25rem;
            
            ">
              <div class="card card-body" style="
              padding:1rem;
              border:0.1rem #bbf3ea solid;
              background-color:#ffffff;
              border-radius:0.5rem;
              margin:1rem;
              margin-bottom:0.5rem;

            ">
                <ul style="
                list-style-type:none;
                
                ">
                  <li style="
                  list-style-type:none;
                  
                  ">
                    <h3>Sumatoria Pedido</h3>
                  </li>
                  <li style="
                  list-style-type:none;
                  
                  ">
                    <div class="row" style="
                    display: flex;
                    flex-flow: wrap;
                    justify-content: space-between;
                    align-items: center;
                    margin: 2rem;
                    ">
                      <div>Articulos</div>
                      <div>{req.body.order.itemsPrice}</div> 
                    </div>
                  </li>
                  <li style="
                  list-style-type:none;
                  
                  ">
                    <div class="row" style="
                    display: flex;
                    flex-flow: wrap;
                    justify-content: space-between;
                    align-items: center;
                    margin: 2rem;
                    ">
                      <div>Envio</div>
                       <div>{req.body.order.shippingPrice}</div> 
                    </div>
                  </li>
                  {/* <li style="
                  list-style-type:none;
                  
                  ">
                    <div class="row" style="
                    display:flex;
                    flex-flow:wrap;
                    justify-content:space-between;
                    align-items:center;
                    margin:2rem;
                    ">
                      <div>Iva</div>
                      <div>{req.body.order.taxPrice}</div>
                    </div>
                  </li> 
                  <li styie="
                  list-style-type:none;
                  
                  ">
                    <div class="row" style="
                    display:flex;
                    flex-flow:wrap;
                    justify-content:space-between;
                    align-items:center;
                    margin:2rem;
                    ">
                      <div>
                        <strong>Total Pedido</strong>
                      </div>
                      <div>
                         <strong>{req.body.order.totalPrice}</strong> 
                      </div>
                    </div>
                  </li>
                  <li style="
                  list-style-type:none;
                  
                  "> 
                    <div class="row" style="
                    display:flex;
                    flex-flow:wrap;
                    justify-content:space-between;
                    align-items:center;
                    margin:2rem;
                    ">
                      <div>
                        <strong>Total en dolares</strong>
                      </div>
                      <div>
                         <strong>{req.body.order.totalinDolars}USD</strong> 
                      </div>
                    </div>
                  </li>
                
                
                </ul>
              </div>
            </div>
          </div>
        </div> */


        
 ;


    

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
            subject: "Compra exitosa", // el asunto del email
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

        <div  class="CE-container" style="
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style:none;
        box-sizing:border-box;
        text-align:center;
        color: #afadad;

        ">
          
        <div class="CE__mensaje-container" style="
        margin:auto;
        margin-top:3rem;
       /* display: flex;
        flex-direction:column;
        justify-content:center;*/
        margin-bottom:30px;
        ">


        <div class="CE__title" style="
        margin-bottom:30px;
        text-align:center;

        ">

        <h3 style=" 
          color: #a09d9d;
          ">
          Email enviado desde pedidos Casaforte
          </h3>
          </div>
    <div  class="CE__img" style="
    margin-bottom:30px;
    text-align:center;

    ">
      <img  class="CE__casaforte" src="https://res.cloudinary.com/casaforte/image/upload/v1622590008/Icon/LOGO_CASA_FORTE_yhb1dx.png" alt="casaforte"  style="
      width:18rem;
      margin-top:2rem;
      text-align:center;

      "/>
    </div>
        <br></br>
        <p style="
        font-size: 20px;
       
       "> 
            
           el usuario ${req.body.name} con correo  ${req.body.email} ha realizado una compra!
            <br></br>
            validar compra para realizar entrega!
            <br></br>
            ID pedido:${req.body.order}
            

           

            </p>

    </div>
    </div>
        


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
            subject: "compra exitosa verificar", // el asunto del email
            text: "compra exitosa verificar", // el mensaje
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
