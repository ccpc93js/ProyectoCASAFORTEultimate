import React from 'react'

const MensajeRegistrado = () => {



    return (
        <div className="mensajeRegistro-container">
            <img src="https://res.cloudinary.com/casaforte/image/upload/v1622647550/Icon/Check_Circle_vtpbrp.jpg" className="mensajeRegistro-img" alt="" />
            <p> Tu registro a sido exitoso nos contactaremos contigo!</p>
            <a href="/"> <button className="button">Regresar</button></a>
        </div>
    )
}

export default MensajeRegistrado
