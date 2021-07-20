import React from 'react'
import './Whatsapp.css'

function Whatsapp() {
    return (
        <div>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                <a href="https://api.whatsapp.com/send?phone=++573046486898&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." className="float" target="_blank">
                    {/* < i class="fa fa-whatsapp my-float"></i> */}
                    <img className="my-float" src="/img/Icons/ICONO_CASA_FORTE.png" alt="" />
                    </a>
        </div>
    )
}

export default Whatsapp
