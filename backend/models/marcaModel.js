import mongoose from 'mongoose';
import shortid from 'shortid'


const marcaSchema = new mongoose.Schema(
    {
      _id:{type: String, default: shortid.generate},
      nombre: { type: String, required: true, unique: true },
      categoria: [String],
      subcategoria: [String],
      img: String,
   
    }
  );
  
  const Marca = mongoose.model('marcas', marcaSchema);
  
  export default Marca;