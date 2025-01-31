import userModel from "./user.schema.js";


export default class UserRepository{
    static async createUser(data){
        let newUser = new userModel({userName:data.userName,email:data.email,password:data.hashedPassword})
        return await newUser.save();
    }

    static async findByEmail(email){
        let user = await userModel.findOne({email:email});
        return user;
  
    }
}