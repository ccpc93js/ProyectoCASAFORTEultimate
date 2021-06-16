import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: { type: String,  required: true, unique: true },
    nit:{type:String, required: true,  unique: true},
    password: {type:String, required:true},
    isAdmin: {type:Boolean,default: false, required:true},
    tDocument:{type:String},
    nDocument: {type:Number},
    department: {type:String},
    city: {type:String},
    adress: {type:String},
    tel: {type:Number},
    cel: {type:Number},
    tipoClient: {type:String},
}, 
 {
    timestamps: true
 }
);

const User = mongoose.model('User',userSchema);
export default User;