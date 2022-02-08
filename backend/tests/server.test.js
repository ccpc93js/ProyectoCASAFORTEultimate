import mongoose from 'mongoose'
import Producto from '../models/productoModel';
import { api, getAllContentFromProduct, initialProductGet } from './helpers';
// import server from '../server'


//config en el package.json para que los console.log no aparezcan en la consola
// "test": "set NODE_OPTIONS=--experimental-vm-modules && jest --verbose --silent backend"


// beforeEach(async() => {
//     await Producto.deleteMany({})

//     const product = new Producto(initialProductGet[0])
//     await product.save()

//     const product2 = new Producto(initialProductGet[1])
//     await product2.save()

//     const product3 = new Producto(initialProductGet[2])
//     await product3.save()
// })



beforeEach(async() => {
    await Producto.deleteMany({})

    //parallel
    // const productObject = initialProductGet.map(product = new Producto(product))
    // const promises = productObject.map(product => product.save())
    // await Promise.all(promises)


    // sequential
    for(const product of initialProductGet){
        const productObject = new Producto(product)
        await productObject.save()
    }
})


describe('GET/productos', () => {

    

  describe('cuando esxiste id', () =>{
    const ProductId = "PA1G4IL_r"

    test('should  respond with a 200 status code get', async () => {
        await api.get('/api/productos')
            .expect(200)
    });

    test('products are returned as json', async () => {
        await api.get('/api/productos')
            .expect('Content-Type', /application\/json/)

    });

    
    test('products are returned a Array', async () => {
        const response = await api.get('/api/productos')
            expect(response.body).toBeInstanceOf(Array)

    });

    test('there are more 0 product', async () => {
        const response = await api.get(`/api/productos/`)

        expect(response.body).toHaveLength(initialProductGet.length)
    });

    test('the fist Product is about id ', async () => {
        const response = await api.get(`/api/productos/`)

        expect(response.body[0]._id).toBe('PA1G4IL_r')
        console.log(response.body[0]._id)
    });

    test('the fist Product is about id2 ', async () => {
        const response = await api.get(`/api/productos/`)

        const contents = response.body.map(p => p._id)

        expect(contents).toContain('PA1G4IL_r')
    });

    test('products/:id are returned a product id', async () => {
        const response = await api.get(`/api/productos/${ProductId}`, (req, res) => {
            const {id} = req.params
            expect(id).toBeEqual(ProductId)
        })
    });

    test('/api/productos/ProductId are returned a Object', async () => {
        const response = await api.get(`/api/productos/${ProductId}`)

        expect(response.body).toBeInstanceOf(Object)
    });




  })

  describe('cuando no existe id', () => {

    const ProductId = "undefined"


    test('/api/productos/ProductId is missing  should respond with a 404 status code', async () => {
        const response = await api.get(`/api/productos/${ProductId}`)
        console.log(response.body)
        expect(response.status).toBe(404)
    });
  })

})

describe('POST/productos', () => {

    test('should  respond with a 200 status code post', async () => {
        await api.post('/api/productos')
            .expect(200)
    });

    test('products are returned as json', async () => {
        await api.post('/api/productos')
            .expect('Content-Type', /application\/json/)

    });

    
    test('products are returned an Object', async () => {
        const response = await api.post('/api/productos')
            expect(response.body).toBeInstanceOf(Object)

    });

    test('products are returned with a propierty producto ', async () => {
        const response = await api.post('/api/productos')
            expect(response.body.producto).toBeDefined()

    });


})

// describe('PUT/productos', () => {

//     test('should  respond with a 200 status code post', async () => {
//         await api.put('/api/productos')
//             .expect(200)
//     });




// })


describe('DELETE/productos', () => {

    test('a producto can be deleted', async () => {

        const {response:firstresponse} = await getAllContentFromProduct()
        const {body: product} = firstresponse
        const productToDelete = product[0]
        
        await api.delete(`/api/productos/${productToDelete._id}`)
            .expect(200)

            const {id, response: secondResponse} = await getAllContentFromProduct()
            expect(secondResponse.body).toHaveLength(initialProductGet.length - 1)

            expect(id).not.toContain(productToDelete._id)
    });


    test('a producto that do exist can not be deleted', async () => {

        await api.delete(`/api/productos/12345`)
            .expect(404)

            const {response} = await getAllContentFromProduct()

            expect(response.body).toHaveLength(initialProductGet.length)

    });

})

const newUser = {
    name:"prueba",
    email: "prueba@gmail.com",
    nit:"123456789",
    password:"prueba1234",
    tDocument:"cedula de ciudadania",
    department:"Antioquia",
    city:"Medellin",
    adress:"calle prueba # 1-1",
    tel:12345678,
    cel:123456789,
    tipoClient:"Persona"
  }

  const newUserInfo = {
    name:"prueba",
    email: "prueba@gmail.com",
    nDocument:"123456789",
    tDocument:"cedula de ciudadania",
    department:"Antioquia",
    city:"Medellin",
    adress:"calle prueba # 1-1",
    tel:12345678,
    cel:123456789,
    tipoClient:"Persona"
  }

describe('POST/users', () => {


    test('register user', async() =>{
        const response =   await api.post('/api/users/register')
            .send(newUser)
            .expect(400)

        expect(response.body).toContain('`email` to unique')
    })

    // test('register userInfo', async() =>{
    //     const response =   await api.post('/api/users/registerInfo')
    //     .send(newUserInfo)
    //     .expect(200)
    // })

    test('get user', async() =>{
        await api.get('/api/users')
        .expect(200)
    })

})



afterAll(()=> {
    mongoose.connection.close()
    // server.close()
})