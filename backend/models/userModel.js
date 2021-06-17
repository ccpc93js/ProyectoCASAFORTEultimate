import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: { type: String,  required: true, unique: true },
    nit:{type:String, required: true,  unique: true},
    password: {type:String, required:true},
    isAdmin: {type:Boolean,default: false, required:true},
    tDocument:String,
    department:String,
    city:String,
    adress:String,
    tel:Number,
    cel:Number,
    tipoClient:String,
}, 
 {
    timestamps: true
 }
);

const User = mongoose.model('User',userSchema);
export default User;