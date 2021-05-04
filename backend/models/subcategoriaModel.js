import mongoose from 'mongoose';
import shortid from 'shortid'


const subCategoriaSchema = new mongoose.Schema(
    {
      _id:{type: String, default: shortid.generate},
      nombre: { type: String, required: true, unique: true },
      categoria: { type: String, required: true },
  
  
   
    }
);

const Subcategoria = mongoose.model('subcategorias', subCategoriaSchema);

export default Subcategoria;

