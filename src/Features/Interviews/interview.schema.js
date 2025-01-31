import mongoose from "mongoose";

let interviewSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    studentPhone:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Completed'],
        default:'Pending'
    },
    result:{
        type:String,
        enum:['Pass','Fail','On Hold','Didn\'t Attempt','Pending'],
        default:'Pending'
    }
});


let interviewModel = mongoose.model('Interview',interviewSchema);

export default interviewModel;