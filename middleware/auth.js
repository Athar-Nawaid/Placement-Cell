
export const auth = (req,res,next)=>{

    if(req.session.userEmail){
        next();
    }else{
        res.render('signIn.ejs',{alert:true,success:false,msg:'Please login First!'});
    }
}