import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';
import cloudinary from '../cloudinary.js';





const uploadRouter = express.Router();



const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadRouter.post('/', isAuth, upload.single('imagen'), (req, res) => {
  res.send(`/${req.file.path}`);
});

uploadRouter.post('/cloudinary', async(req, res) => {
  try{
    const fileStr = req.body.data;
    console.log(fileStr)
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "casaforteUpload"
    })
    console.log(uploadResponse);
    res.json({msg: "bien!!!!"})
  }catch (error){
    console.log(error)
    res.status(500).json({err: "Algo salio mal"})
  }
});

uploadRouter.post('/cloudinary/images', async(req, res) => {
  const {resources} = await cloudinary.search
        .expression('folder:casaforteUpload')
        .sort_by('public_id','desc')
        .execute();
  const publicIds = resources.map((file) => file.public_id);
});

export default uploadRouter;
