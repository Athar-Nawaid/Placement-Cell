import jwt from 'jsonwebtoken';


let jwtAuth = (req,res,next)=>{
    const token = req.cookies.token;
    console.log('working')
    if(!token){
        res.status(401).send('Unauthorized');
    }

    try{

        let payload = jwt.verify(token,"faS33Cm20wKSb3dx6pEw5n88tXPmTt6u");
        req.userEmail = payload.email;
        req.userId = payload.userId;
        req.userName = payload.userName;
        
    }catch(err){

        res.status(401).send('Unauthorized');

    }

    next();
    
}

export default jwtAuth;