import mongoose from 'mongoose';
import shortid from 'shortid'

const productoSchema = new mongoose.Schema(
  {
    _id:{type: String, default: shortid.generate},
    codigo:String,
    imagen: {
        img1:String,
        img2:String,
        img3:String,
    },   
    marca: String,
    categoria:String,
    subcategoria: String,
    info: String,
    precio:Number,
    enStock:Number,
    unidad:String
  },
  {
    timestamps: true,
  }
);
const Producto = mongoose.model('productos', productoSchema);

export default Producto;






