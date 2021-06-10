import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import {generateToken, isAdmin, isAuth} from '../utils.js'
import UserInfo from '../models/userInfoModel.js';

const userInfoRouter = express.Router();


userInfoRouter.post(
    '/registerInfo',
    expressAsyncHandler(async (req, res) => {
      const userInfo = new UserInfo({
        name: req.body.name,
        tDocument: req.body.tDocument,
        nDocument: req.body.nDocument,
        department: req.body.department,
        city: req.body.city,
        adress: req.body.adress,
        email: req.body.email,
        tel: req.body.tel,
        cel: req.body.cel,
        tipoClient: req.body.tipoClient
      });
      const createdUserInfo = await userInfo.save();
      res.send({
        _id: createdUserInfo._id,
        name: createdUserInfo.name,
        tDocument: createdUserInfo.tDocument,
        nDocument: createdUserInfo.nDocument,
        department: createdUserInfo.department,
        city: createdUserInfo.city,
        adress: createdUserInfo.adress,
        email: createdUserInfo.email,
        tel: createdUserInfo.tel,
        cel: createdUserInfo.cel,
        tipoClient: createdUserInfo.tipoClient,
        token: generateToken(createdUserInfo),
      });
    })
  );

  userInfoRouter.get(
    '/',
    // isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const usersInfo = await UserInfo.find({});
      res.send(usersInfo);
    })
  );
  userInfoRouter.delete(
    '/:id',
    // isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const userInfo = await UserInfo.findById(req.params.id);
      if (userInfo) {
        if (userInfo.email === 'ferreteriacasaforte@gmail.com') {
          res.status(400).send({ message: 'No Se Puede Eliminar El Usuario Admin ' });
          return;
        }
        const deleteUserInfo = await userInfo.remove();
        res.send({ message: 'Usuario Eliminado', user: deleteUserInfo });
      } else {
        res.status(404).send({ message: 'Usuario No Encontrado' });
      }
    })
  );
  export default userInfoRouter;
