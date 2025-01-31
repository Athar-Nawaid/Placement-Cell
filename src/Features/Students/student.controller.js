import StudentRepository from "./student.repo.js";

export default class StudentController{


    static async createStudent(req,res){
        const{batch,studentName,studentEmail,phone,college,dsa,webdev,react} = req.body;
        let newStudent = await StudentRepository.createStudent(batch,studentName,studentEmail,phone,college,dsa,webdev,react);
        if(!newStudent){
            //need help here
            res.render('dashboard.ejs',{err:'Couldn\'t create student',userName:req.userName});
        }else{
           res.redirect('/api/admin/dashboard');
        }
    
    }


    static async getStudents(req,res){
        return await StudentRepository.getStudents();
        
    }
    

    static async delStudent(req,res){
        let id = req.params.id;
        let deleted =  await StudentRepository.deleteStudent(id);
        res.redirect('/api/admin/dashboard');
    }

    
}