import app from "./app.js";

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT,() =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})

export default server
