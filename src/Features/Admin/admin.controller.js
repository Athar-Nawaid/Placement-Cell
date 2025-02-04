
import InterviewRepository from "../Interviews/interview.repository.js";
import StudentRepository from "../Students/student.repo.js";
import { Parser as CsvParser } from 'json2csv';



export default class AdminController{


    static async getDashboard(req,res){
        let students = await StudentRepository.getStudents();
        res.render('dashboard.ejs',{err:null,arr:students,userName:req.userName});
    }


    static async getInterviewPage(req,res){
        let interview = await InterviewRepository.getInterviews();
        res.render('interview.ejs',{arr:interview});
    }

    static async getInterviewForm(req,res){
        let students = await StudentRepository.getStudents();
        res.render('interviewForm.ejs',{arr:students});
    }

    static async getUpdateInterviewPage(req,res){
        let interviewId = req.params.id;
        let interview = await InterviewRepository.getInterviewById(interviewId);
        res.render('interview.update.form.ejs',{interview:interview});
    }
    

    static async scheduleInterview(req,res){
        let{company,date,email} = req.body;
        date = date.slice(0, 15);
       
        let interview = await InterviewRepository.createInterview(company,date,email);
        if(!interview){
        
            res.redirect('/api/admin/interview');
        }else{
            
            res.redirect('/api/admin/interview');
        }
        
    }

    static async updateInterview(req,res){
        let interviewId = req.params.id;
        let {company,date,status,result} = req.body;
        let updatedInterview = await InterviewRepository.updateInterview(interviewId,company,date,status,result)
        res.redirect('/api/admin/interview');
    }

    static async getReport(req,res){
        try{
            let arr = [];
                let interviews = await InterviewRepository.getInterviews();
                
                for (let interview of interviews) {
                    let student = await StudentRepository.getStudentById(interview.studentId);
                
                    arr.push({
                        studentId:interview.studentId,
                        studentName:interview.studentName,
                        college:student.college,
                        dsa:student.dsa,
                        webdev:student.webdev,
                        react:student.react,
                        company:interview.company,
                        date:interview.date,
                        status:interview.status,
                        result:interview.result
                    });
                    
                };

                let heading = ['Studend Id','Student Name','College', 'Dsa','Wevdev','React','Company','Date','Status','Result'];
                let csvParser = new CsvParser({heading});
                let csvData = csvParser.parse(arr);
            
                res.setHeader('Content-Type','text/csv');
                res.setHeader('Content-Disposition','attachment:filename=studentData.csv');
                console.log('working');

                res.status(200).end(csvData);
            }
            catch(err){
                console.log(err);
            }
        }
    
    
}