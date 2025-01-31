import mongoose from "mongoose";


export default function mongooseConnect(){
    mongoose.connect(process.env.DB_URL);
    console.log('Connected to Mongoose');
}