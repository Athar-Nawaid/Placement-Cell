import UserRepository from "./user.repo.js";
import bcrypt from 'bcrypt';
import StudentRepository from "../Students/student.repo.js";


export default class UserController{

    static getSignUp(req,res,next){
        res.render('signUp.ejs',{alert:false,userName:null});
    }

    static getSignIn(req,res,next){
        res.render('signIn.ejs',{alert:false,userName:null});
    }

    static async createUser(req,res,next) {

        try{

            const{userName,email,password} = req.body;
            
            let hashedPassword = await bcrypt.hash(password,12);

            let user = await UserRepository.createUser({userName,email,hashedPassword});

            if(!user){
                
                res.render('signUp.ejs',{msg:'Something Went wrong. Try Again!!',success:false,alert:true,userName:null});
            }else{
                res.render('signIn.ejs',{msg:'Registration Successfull',success:true,alert:true,userName:null})
            }

        }catch(err){
            console.log(err);
        }

    }


    static async signIn(req,res){

        const{email,password} = req.body;
        let user = await UserRepository.findByEmail(email);

        if(!user){
            return res.render('signUp.ejs',{msg:'No user found! Please sign up first.',success:false,alert:true,userName:null});
        }

        let result = await bcrypt.compare(password,user.password);
        

        if(!result){

            res.status(404).render('Invalid Credentials');

        }else{

            req.session.userEmail = email;
            req.session.userName = user.userName;
            
            res.redirect('/api/admin/dashboard');

        }
    }



    static async logout(req,res){
        try {
            await new Promise((resolve, reject) => {
                req.session.destroy(err => {
                    if (err) return reject(err);
                    resolve();
                });
            });
            res.redirect('/');
        } catch (err) {
            console.error("Failed to destroy session:", err);
           
        }
      
    }

}