import React from 'react'

const MensajeRegistrado = () => {



    return (
        <div className="mensajeRegistro-container">
            <img src="/img/Icons/Check_Circle.png" className="mensajeRegistro-img" alt="" />
            <p> Tu registro a sido exitoso nos contactaremos contigo!</p>
            <a href="/"> <button className="button">Regresar</button></a>
        </div>
    )
}

export default MensajeRegistrado
