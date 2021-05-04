import mongoose from 'mongoose'

const userInfoSchema = new mongoose.Schema({
    name: {type:String, required: true},
    tDocument:{type:String, required: true},
    nDocument: {type:Number, required:true},
    department: {type:String, required:true},
    city: {type:String, required:true},
    adress: {type:String, required:true},
    email: { type: String,  required: true, unique: true },
    tel: {type:Number, required:true},
    cel: {type:Number, required:true},
    tipoClient: {type:String, required:true},
}, 
 {
    timestamps: true
 }
);

const UserInfo = mongoose.model('usersInfo',userInfoSchema);
export default UserInfo;