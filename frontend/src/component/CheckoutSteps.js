import React from 'react'
import './CheckoutSteps.css'

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active': ''}>Registrarse</div>
            <div className={props.step2 ? 'active': ''}>Envio</div>
            <div className={props.step3 ? 'active': ''}>Metodo</div>
            <div className={props.step4 ? 'active': ''}>Realizar pedido</div>
        </div>
    )
}
 