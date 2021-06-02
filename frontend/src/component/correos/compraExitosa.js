import React from 'react'
import './compraExitosa.css'

function compraExitosa() {
    return (
        <div class="CE-container">
          
            <div class="CE__mensaje-container">
              <div class="CE__title">

                <h2 >Ferreteria Casa forte</h2>
              </div>

                <div  class="CE__img">
                  <img  class="CE__casaforte" src="/img/Icons/LOGO_CASA_FORTE.png" alt="casaforte" />
                </div>

                <div class="CE__frase">

                <p >
                {/* ${'{'}req.body.name{'}'} */}<br />
                  Compra exitosa, gracias por su compra! <br /> 
                  el proveedor se comunicara con usted para la entrega.
                </p>
                </div>
                <div class="CE__pedido"> 

                <p> Pedido ${'{'}req.body.order{'}'}</p>
                </div>
                <div class="CE__visitaTienda">

                <a   href="https://casaforte.herokuapp.com">Visitar nuestra tienda</a>
                </div>
            </div>

            <div className="orderScreen-container">
      <h3>Resumen del pedido</h3>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <strong>Direccion de envio</strong>
                <h3 className="envioINfo">
                 {/* <p> {order.shippingAddress.fullName}</p>
                 <p> {order.shippingAddress.address}</p>
                 <p>{order.shippingAddress.city}</p>
                 <p>{order.shippingAddress.postalCode}</p>
                 <p>{order.shippingAddress.country}</p> */}
                </h3>

              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Pago</strong>
                <h3>
                  <strong>Metodo: </strong> 
                  {/* {order.paymentMethod} */}
                </h3>
                    
              </div>
            </li>
            <li>
              <div className="card card-body">
                <strong>Articulos</strong>
                <ul>
                    <li key="key">
                      <div className="row">
                        <div>
                          <img
                            // src={item.imagen}
                            // alt={item.info}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-20">
                          {/* <a href={`/product/${item.producto}`}>
                            {item.info}
                          </a> */}
                        </div>

                        <div>
                        {/* {item.qty} x {item.precio} = {item.qty * item.precio} */}
                        </div>
                      </div>
                    </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h3>Sumatoria Pedido</h3>
              </li>
              <li>
                <div className="row">
                  <div>Articulos</div>
                  {/* <div>${order.itemsPrice}</div> */}
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  {/* <div>${order.shippingPrice}</div> */}
                </div>
              </li>
              {/* <li>
                <div className="row">
                  <div>Iva</div>
                  <div>${convertirAmoneda(order.taxPrice.toFixed(2),'COP')}</div>
                </div>
              </li> */}
              <li>
                <div className="row">
                  <div>
                    <strong>Total Pedido</strong>
                  </div>
                  <div>
                    {/* <strong>${order.totalPrice}</strong> */}
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong>Total en dolares</strong>
                  </div>
                  <div>
                    {/* <strong>${order.totalinDolars}USD</strong> */}
                  </div>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>


            
        </div>
    )
}

export default compraExitosa
