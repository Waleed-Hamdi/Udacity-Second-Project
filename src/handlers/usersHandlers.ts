import express,{Request, Response} from 'express';
import { user,usermodel } from '../models/userModel';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const store = new usermodel();

dotenv.config();
const secret = process.env.TOKEN_SECRET;


const userRoutr = (app:express.Application)=>{
    app.get('/users',index);
    app.post('/user/create',create);
    app.get('/user/show',show);
}


const index = async(req: Request,res: Response)=>{
    try{

        if(jwt.verify(req.body.token,secret as string)){
            const result = await store.index();
            res.status(200).json(result);
        }

    }catch(err){
            res.status(401);
            res.json('sorry you are not authorized');
    }
    
}

const create = async(req: Request,res: Response)=>{
    const u:user={
        id: 0,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    const result = await store.create(u);
    const token = jwt.sign({result},secret as string);
    res.status(200).json(token);
}


const show = async(req: Request,res: Response)=>{
    const id = parseInt(req.body.id as string,10);
    try{

        if(jwt.verify(req.body.token,secret as string)){
            const result = await store.show(id);
            res.json(result);
        }

    }catch(err){
            res.status(401);
            res.json('you are not authorized');
    }

}




export default userRoutr;