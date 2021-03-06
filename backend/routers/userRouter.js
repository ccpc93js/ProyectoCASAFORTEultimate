import express from 'express';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler';
import data from '../dataUsers.js';
import User from '../models/userModel.js';
import {generateToken, isAdmin, isAuth} from '../utils.js'



const userRouter = express.Router();
userRouter.get('/seed', expressAsyncHandler(async (req,res)=>{
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({createdUsers});
}));

userRouter.post('/signin', expressAsyncHandler(async(req, res)=>{
  console.log(req.body.email)

    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                nit: user.nit,
                email: user.email,
                tipoClient: user.tipoClient,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return
        }
    }
    res.status(401).send({message: 'email o contraseña invalidad'})
}));


userRouter.put(
  '/reset', 
  expressAsyncHandler(async(req, res)=>{
    
  const user = await User.findById(req.body.id);

  if(user){
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }

    const updatedUser = await user.save();
    res.send({
        
      _id: updatedUser._id,
      name: updatedUser.name,
      nit: updatedUser.nit,
      email: updatedUser.email,
      tipoClient: updatedUser.tipoClient,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
    // res.send({password: updatedUser.password });
  } else {
    res.status(404).send({ message: 'contraseña no actualizada' });
  }
  //   res.status(200).json()
  // }else{
  //   res.status(404).json();
  // }
}))




userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      try {
        const user = new User({
          name: req.body.name,
          nit: req.body.nit,
          email: req.body.email,
          tDocument: req.body.tDocument,
          department: req.body.department,
          city: req.body.city,
          adress: req.body.adress,
          tel: req.body.tel,
          cel: req.body.cel,
          tipoClient: req.body.tipoClient,
          password: bcrypt.hashSync(req.body.password, 8),
        });
  
        console.log(req.body)
        const createdUser = await user.save();
        res.send({
          _id: createdUser._id,
          name: createdUser.name,
          nit: createdUser.nit,
          email: createdUser.email,
          tDocument: createdUser.tDocument,
          department: createdUser.department,
          city: createdUser.city,
          adress: createdUser.adress,
          tel: createdUser.tel,
          cel: createdUser.cel,
          tipoClient: createdUser.tipoClient,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser),
        });

        // res.status(500).send({msg:"El ususario ya existe"})

      } catch (error) {
          res.status(400).send({msg:error})
      }
    })
  );


  userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'Usuario no encontrado' });
      }
    })
  );

  userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.user._id);
      console.log(user)
      if (user) {
        user.name = req.body.name || user.name;
        user.nit = req.body.nit || user.nit;
        user.email = req.body.email || user.email;
        user.tDocument = req.body.tDocument || user.tDocument;
        user.department = req.body.department || user.department;
        user.city = req.body.city || user.city;
        user.adress = req.body.adress || user.adress;
        user.tel = req.body.tel || user.tel;
        user.cel = req.body.cel || user.cel;
        user.tipoClient = req.body.tipoClient || user.tipoClient;


        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          nit: updatedUser.nit,
          email: updatedUser.email,
          tDocument: updatedUser.tDocument,
          department: updatedUser.department,
          city: updatedUser.city,
          adress: updatedUser.adress,
          tel: updatedUser.tel,
          cel: updatedUser.cel,
          tipoClient: updatedUser.tipoClient,
          token: generateToken(updatedUser),
        });
      }
    })
  );

  userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );
  // userRouter.get(
  //   '/registerInfo',
  //   isAuth,
  //   isAdmin,
  //   expressAsyncHandler(async (req, res) => {
  //     const usersInfo = await UserInfo.find({});
  //     res.send(usersInfo);
  //   })
  // );

  userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        if (user.email === 'ferreteriacasaforte@gmail.com') {
          res.status(400).send({ message: 'No Se Puede Eliminar El Usuario Admin ' });
          return;
        }
        const deleteUser = await user.remove();
        res.send({ message: 'Usuario Eliminado', user: deleteUser });
      } else {
        res.status(404).send({ message: 'Usuario No Encontrado' });
      }
    })
  );



  userRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = new User({
        name: 'nombre',
        email: 'ejemploemail@gmail.com ',
        nit: 'ejemplo 0000',
        password: 'password',
        isAdmin: false,   
      });
      const createdUser = await user.save();
      res.send({ message: 'Usuario creado', user: createdUser });
    })
  );
  
  userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.nit = req.body.nit || user.nit;
        user.tDocument = req.body.tDocument || user.tDocument;
        user.department = req.body.department || user.department;
        user.city = req.body.city || user.city;
        user.adress = req.body.adress || user.adress;
        user.tel = req.body.tel || user.tel;
        user.cel = req.body.cel || user.cel;
        user.tipoClient = req.body.tipoClient || user.tipoClient;

        user.isAdmin = Boolean(req.body.isAdmin);
        // user.isAdmin = req.body.isAdmin || user.isAdmin;
        const updatedUser = await user.save();
        res.send({ message: 'Usuario Actualizado', user: updatedUser });
      } else {
        res.status(404).send({ message: 'Usuario No Encontrado' });
      }
    })
  );
  
  
export default userRouter;
