import mongoose from "mongoose";
import interviewModel from "./interview.schema.js";
import studentModel from "../Students/student.schema.js";

export default class InterviewRepository{

    static async createInterview(company,date,email){

        console.log();
        let student = await studentModel.findOne({email:email});
       
        if(!student){
            throw new Error('Student not found');
        }

        let newInterview = new interviewModel({
            company:company,
            date:date,
            studentId:student._id,
            studentName:student.name,
            studentEmail:student.email,
            studentPhone:student.phone,
            batch:student.batch,
            status:'Pending',
            result:'Pending'
        });
        await newInterview.save();
        await studentModel.updateOne(
            {email:email},
            {
                $push:{interview:newInterview}
            }
        );
        return newInterview;
    }

    static async getInterviews(){
        return await interviewModel.find();
    }
    static async getInterviewById(id){
        return await interviewModel.findById(id);
    }

    static async updateInterview(interviewId,company,date,status,result){
        return await interviewModel.updateOne(
            {_id:interviewId},
            {
                company:company,
                date:date,
                status:status,
                result:result
            }
        ) ;
    }
}