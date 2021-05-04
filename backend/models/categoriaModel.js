import mongoose from 'mongoose';
import shortid from 'shortid'



const categoriaSchema = new mongoose.Schema(
    {
      _id:{type: String, default: shortid.generate},
      nombre: { type: String, required: true, unique: true },
      marca: [String],
      subcategoria: [String],
   
    }
  );
  
  const Categoria = mongoose.model('categorias', categoriaSchema);
  
  export default Categoria;
  