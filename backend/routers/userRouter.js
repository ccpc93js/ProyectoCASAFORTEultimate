import express from 'express';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler';
import data from '../dataUsers.js';
import User from '../models/userModel.js';
import {generateToken, isAdmin, isAuth} from '../utils.js'
import UserInfo from '../models/userInfoModel.js';


const userRouter = express.Router();
userRouter.get('/seed', expressAsyncHandler(async (req,res)=>{
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({createdUsers});
}));

userRouter.post('/signin', expressAsyncHandler(async(req, res)=>{
    const user = await User.findOne({nit: req.body.nit});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                nit: user.nit,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return
        }
    }
    res.status(401).send({message: 'email o contraseña invalidad'})
}))

// userRouter.post('/signinAdmin', expressAsyncHandler(async(req, res)=>{
//   const user = await User.findOne({nit: req.body.email});
//   if(user){
//       if(bcrypt.compareSync(req.body.password, user.password)){
//           res.send({
//               _id: user._id,
//               name: user.name,
//               email: user.email,
//               isAdmin: user.isAdmin,
//               token: generateToken(user)
//           });
//           return
//       }
//   }
//   res.status(401).send({message: 'Invalid email or password'})
// }))

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
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
    })
  );

  // userRouter.post(
  //   '/registerInfo',
  //   expressAsyncHandler(async (req, res) => {
  //     const userInfo = new UserInfo({
  //       name: req.body.name,
  //       tDocument: req.body.tDocument,
  //       nDocument: req.body.nDocument,
  //       department: req.body.department,
  //       city: req.body.city,
  //       adress: req.body.adress,
  //       email: req.body.email,
  //       tel: req.body.tel,
  //       cel: req.body.cel,
  //       tipoClient: req.body.tipoClient
  //     });
  //     const createdUserInfo = await userInfo.save();
  //     res.send({
  //       _id: createdUserInfo._id,
  //       name: createdUserInfo.name,
  //       tDocument: createdUserInfo.tDocument,
  //       nDocument: createdUserInfo.nDocument,
  //       department: createdUserInfo.department,
  //       city: createdUserInfo.city,
  //       adress: createdUserInfo.adress,
  //       email: createdUserInfo.email,
  //       tel: createdUserInfo.tel,
  //       cel: createdUserInfo.cel,
  //       tipoClient: createdUserInfo.tipoClient,
  //       token: generateToken(createdUserInfo),
  //     });
  //   })
  // );

  // userRouter.post(
  //   '/registerAdmin',
  //   expressAsyncHandler(async (req, res) => {
  //     const user = new User({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: bcrypt.hashSync(req.body.password, 8),
  //     });
  //     const createdUser = await user.save();
  //     res.send({
  //       _id: createdUser._id,
  //       name: createdUser.name,
  //       email: createdUser.email,
  //       isAdmin: createdUser.isAdmin,
  //       token: generateToken(createdUser),
  //     });
  //   })
  // );


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
    // isAuth,
    // isAdmin,
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
        user.isAdmin = Boolean(req.body.isAdmin);
        // user.isAdmin = req.body.isAdmin || user.isAdmin;
        const updatedUser = await user.save();
        res.send({ message: 'Usuario Actualizado', user: updatedUser });
      } else {
        res.status(404).send({ message: 'Usuario No Encontrado' });
      }
    })
  );
  
  // userRouter.put(
  //   '/profileAdmin',
  //   isAuth,
  //   expressAsyncHandler(async (req, res) => {
  //     const user = await User.findById(req.user._id);
  //     if (user) {
  //       user.name = req.body.name || user.name;
  //       user.email = req.body.email || user.email;

  //       if (req.body.password) {
  //         user.password = bcrypt.hashSync(req.body.password, 8);
  //       }
  //       const updatedUser = await user.save();
  //       res.send({
  //         _id: updatedUser._id,
  //         name: updatedUser.name,
  //         // nit: updatedUser.nit,
  //         email: updatedUser.email,
  //         isAdmin: updatedUser.isAdmin,
  //         token: generateToken(updatedUser),
  //       });
  //     }
  //   })
  // );

export default userRouter;
