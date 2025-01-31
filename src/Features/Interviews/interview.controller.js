import InterviewRepository from "./interview.repository.js";


export default class InterviewController{

    static async createInterview(req,res){
        try{
            const{company,date,email} = req.body;
            let interview = await InterviewRepository.createInterview(company,date,email);

            if(!interview){
                alert('Interview Could not be scheduled please try again!');
                res.redirect('/api/admin/interview');
            }else{
                alert('Interview Scheduled successfully');
                res.redirect('/api/admin/interview');
            }
        }catch(err){
            console.log(err);
        }
    } 
}