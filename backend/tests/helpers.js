import supertest from 'supertest'
import app from '../server/app.js'
export const api = supertest(app)


export const initialProductGet = [
    {
        _id:"PA1G4IL_r",
        enOferta:false,
        codigo:"1001156",
        imagen:"https://res.cloudinary.com/casaforte/image/upload/v1622599092/producto...",
        marca:"ABRACOL",
        categoria:"abrasivos",
        subcategoria:"lijas-y-telas-recubiertas",
        info:"Lija de Agua Profesional Grano 600 9” x 11” Abracol",
        precio:1099,
        enStock:50,
        unidad:"Unidad",
   
    },
    {
        _id:"pUOnBiyHol",
        enOferta:false,
        codigo:"1001156",
        imagen:"https://res.cloudinary.com/casaforte/image/upload/v1622599092/producto...",
        marca:"ABRACOL",
        categoria:"abrasivos",
        subcategoria:"lijas-y-telas-recubiertas",
        info:"Lija de Agua Profesional Grano 600 9” x 11” Abracol",
        precio:1099,
        enStock:50,
        unidad:"Unidad",
   
    },
    {
        _id:"E5OxQ97RO8",
        enOferta:false,
        codigo:"1001156",
        imagen:"https://res.cloudinary.com/casaforte/image/upload/v1622599092/producto...",
        marca:"ABRACOL",
        categoria:"abrasivos",
        subcategoria:"lijas-y-telas-recubiertas",
        info:"Lija de Agua Profesional Grano 600 9” x 11” Abracol",
        precio:1099,
        enStock:50,
        unidad:"Unidad",
   
    }

]

export const getAllContentFromProduct = async () => {
    const response = await api.get('/api/productos')
    return {
        id: response.body.map(p => p._id),
        response
        }

}

export const getUsers = async () =>{
    
}