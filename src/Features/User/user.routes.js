import express from 'express';
import UserController from './user.controller.js';

import { auth } from '../../../middleware/auth.js';

let userRouter = express.Router();

// GET

userRouter.get('/signUp',(req,res,next)=>{
    UserController.getSignUp(req,res,next);
});

userRouter.get('/signIn',(req,res,next)=>{
    UserController.getSignIn(req,res,next);
});


userRouter.get('/logout',(req,res,next)=>{
    UserController.logout(req,res,next);
});


// POST

userRouter.post('/signUp',(req,res,next)=>{
    UserController.createUser(req,res,next);
});

userRouter.post('/signIn',(req,res,next)=>{
    UserController.signIn(req,res,next);
});






export default userRouter;
