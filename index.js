import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import mongooseConnect from './config/mongoose.js';
import userRouter from './src/Features/User/user.routes.js';
import studentRouter from './src/Features/Students/student.router.js';
import adminRouter from './src/Features/Admin/admin.routes.js';
import session from 'express-session';
import { auth } from './middleware/auth.js';
import flash from 'connect-flash';


let server = express();

server.use(express.urlencoded({extended:true}));

server.use(express.json());

server.use(flash());

server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views'));
server.use('/css',express.static(path.join(path.resolve(),'src','styles')));
server.use('/res',express.static(path.join(path.resolve(),'src','resources')));

//Middle ware to use Ejs layouts and reuse the navbar
server.use(expressEjsLayouts);

server.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));

//flas to use middleware in ejs
// server.use(flash);

// Major Routes
server.use('/api/user',userRouter);
server.use('/api/student',auth,studentRouter);
server.use('/api/admin',auth,adminRouter);






server.get('/',(req,res)=>{
    res.render('home.ejs',{userName:null});
    // res.render('interview.update.form.ejs');
});



server.listen(3000,()=>{
    mongooseConnect();
    console.log('server is listening at 3000');
    
});