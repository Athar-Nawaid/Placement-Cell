import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
    batch:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/.+\@.+\../,'Please enter a valid email address']
    },
    phone:{
        type:Number,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    dsa:{
        type:Number,
        required:true,
    },
    webdev:{
        type:Number,
        required:true,
    },
    react:{
        type:Number,
        required:true,
    },
    interview:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]

});

const studentModel = mongoose.model('Student',studentSchema);
export default studentModel;