import { $porcentajeEmpresa, $porcentajePersona } from './Productos'

export default function PrecioClient({ precio, userInfo }) {
    switch (userInfo.tipoClient) {
        case "Empresa":
            return precio + (precio * $porcentajeEmpresa)

        case "Persona":
            return precio + (precio * $porcentajePersona)

        default:
            return precio
    }


}

