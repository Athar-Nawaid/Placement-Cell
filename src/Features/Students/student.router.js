import express from 'express';
import StudentController from './student.controller.js';
import jwtAuth from '../../../middleware/jwt.auth.js';

let studentRouter = express.Router();

studentRouter.post('/',(req,res)=>{
    StudentController.createStudent(req,res);
});

studentRouter.get('/',(req,res)=>{
    StudentController.getStudents(req,res);
});

studentRouter.get('/del/:id',(req,res)=>{
    StudentController.delStudent(req,res);
});



export default studentRouter;