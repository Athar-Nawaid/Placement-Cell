import mongoose from "mongoose";


let userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+\../,'Please enter a valid email address']
    },
    password:{
        type:String,
        required:true,
    },
});

let userModel = mongoose.model('User',userSchema);
export default userModel;