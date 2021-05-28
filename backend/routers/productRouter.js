import express from 'express';
import data from '../data.js';
import Producto from '../models/productoModel.js'
import Categoria from '../models/categoriaModel.js'
import Subcategoria from '../models/subcategoriaModel.js'
import Marca from '../models/marcaModel.js'
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../utils.js';


const productRouter = express.Router();



productRouter.get('/', expressAsyncHandler(async(req,res) =>{
    const productos = await Producto.find({})
    res.send(productos);
})
);

productRouter.get('/seed', expressAsyncHandler(async(req,res) =>{
    await Producto.remove({})
    const productos = await Producto.insertMany(data.productos)
    res.send(productos);
})
);

productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res)=>{
        const producto = await Producto.findById(req.params.id);
        if(Producto){
            res.send(producto);

        }else{
            res.status(404).send({message: 'Producto no encontrado'});
        }
    })
)


// productRouter.post("/", expressAsyncHandler(async(req, res)=>{
//     const nuevoProducto = new Producto(req.body);
//     const guardarProducto = await nuevoProducto.save();
//     res.send(guardarProducto);
//     // console.log(req)
// })
// );


productRouter.get('/categorias/get', expressAsyncHandler(async(req,res) =>{
    const categorias = await Categoria.find({})
    res.send(categorias);
})
);

productRouter.get('/categorias/seed', expressAsyncHandler(async(req,res) =>{
    await Categoria.remove({})
    const categorias = await Categoria.insertMany(data.categorias)
    res.send(categorias);
})
);

// productRouter.post("/categorias", expressAsyncHandler(async(req, res)=>{
//     const nuevoCategoria = new Categoria(req.body);
//     const guardarCategoria = await nuevoCategoria.save();
//     res.send(guardarCategoria);
//     // console.log(req)
// })
// );


productRouter.get('/subcategorias/get', expressAsyncHandler(async(req,res) =>{
    const subcategorias = await Subcategoria.find({})
    res.send(subcategorias);
})
);

productRouter.get('/subcategorias/seed', expressAsyncHandler(async(req,res) =>{
    await Subcategoria.remove({})
    const subcategorias = await Subcategoria.insertMany(data.subcategorias)
    res.send(subcategorias);
})
);

// productRouter.post("/subcategorias", expressAsyncHandler(async(req, res)=>{
//     const nuevoSubcategoria = new Subcategoria(req.body);
//     const guardarSubcategoria = await nuevoSubcategoria.save();
//     res.send(guardarSubcategoria);
//     // console.log(req)
// })
// );


productRouter.get('/marcas/get', expressAsyncHandler(async(req,res) =>{
    const marcas = await Marca.find({})
    res.send(marcas);
})
);

productRouter.get('/marcas/seed', expressAsyncHandler(async(req,res) =>{
    await Marca.remove({})
    const marcas = await Marca.insertMany(data.marcas)
    res.send(marcas);
})
);


// productRouter.post("/marcas", expressAsyncHandler(async(req, res)=>{
//     const nuevoMarca = new Marca(req.body);
//     const guardarMarca = await nuevoMarca.save();
//     res.send(guardarMarca);
//     // console.log(req)
// })
// );


productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const producto = new Producto({
        codigo: 'codigo' ,
        info: 'ejemplo descripcion ',
        imagen: {img1:'/img/img1.jpg'},
        precio: 0,
        categoria: 'ejemplo categoria',
        subcategoria: 'ejemplo subcategoria',
        marca: 'ejemplo marca',
        enStock: 0,
        unidad:'x0'
   
      });
      const createdProducto = await producto.save();
      res.send({ message: 'Producto creado', producto: createdProducto });
    })
  );
  productRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const producto = await Producto.findById(productId);
      if (producto) {
        producto.codigo = req.body.codigo;
        producto.info = req.body.info;
        producto.precio = req.body.precio;
        producto.imagen[0] = req.body.imagen[0];
        producto.marca = req.body.marca;
        producto.categoria = req.body.categoria;
        producto.subcategoria = req.body.subcategoria;
        producto.enStock = req.body.enStock;
        producto.unidad = req.body.unidad;
        producto.enOferta = req.body.enOferta
        producto.precioDeOferta = req.body.precioDeOferta
        producto.descuento = req.body.descuento
        const updatedProduct = await producto.save();
        res.send({ message: 'Producto actualizado', producto: updatedProduct });
      } else {
        res.status(404).send({ message: 'Producto no encontrado' });
      }
    })
  );
  
  productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const producto = await Producto.findById(req.params.id);
      if (producto) {
        const deleteProduct = await producto.remove();
        res.send({ message: 'Producto eliminado', producto: deleteProduct });
      } else {
        res.status(404).send({ message: 'Producto no encontrado' });
      }
    })
  );
  

export default productRouter;