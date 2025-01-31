import studentModel from "./student.schema.js";

export default class StudentRepository{
    static async createStudent(batch,studentName,studentEmail,phone,college,dsa,webdev,react){
        let newStudent = new studentModel({
            batch:batch,
            name:studentName,
            email:studentEmail,
            phone:phone,
            college:college,
            dsa:dsa,
            webdev:webdev,
            react:react
        });
        return await newStudent.save();
    }
    static async getStudents(){
        return await studentModel.find();
    }
    static async getStudentById(id){
        return await studentModel.findById(id);
    }

    static async deleteStudent(id){
        return await studentModel.deleteOne({_id:id});
    }
}