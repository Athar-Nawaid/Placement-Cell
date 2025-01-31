import express from 'express';
import AdminController from './admin.controller.js';

const adminRouter = express.Router();

adminRouter.get('/interview',(req,res)=>{
    AdminController.getInterviewPage(req,res);
})

adminRouter.get('/dashboard',(req,res)=>{

    AdminController.getDashboard(req,res);
})
adminRouter.get('/interview-form',(req,res)=>{
    AdminController.getInterviewForm(req,res);
})

adminRouter.get('/update/:id',(req,res)=>{
    AdminController.getUpdateInterviewPage(req,res);
})

adminRouter.get('/download',(req,res)=>{
    
    AdminController.getReport(req,res);
})

adminRouter.post('/schedule-interview',(req,res)=>{
    AdminController.scheduleInterview(req,res);
})

adminRouter.post('/update-interview/:id',(req,res)=>{
    AdminController.updateInterview(req,res);
})



export default adminRouter;