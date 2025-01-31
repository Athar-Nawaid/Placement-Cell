import mongoose from "mongoose";


export default function mongooseConnect(){
    mongoose.connect('mongodb://localhost:27017/Placement-Cell');
    console.log('Connected to Mongoose');
}