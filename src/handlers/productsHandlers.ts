import express ,{Request, Response} from 'express';
import { product,productmodel } from '../models/productModel';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.TOKEN_SECRET;


const store = new productmodel();



const productroute = (app:express.Application)=>{
    app.get('/products',index);
    app.get('/product/:id',show);
    app.post('/create_product',create);
    
}

const index = async(req:Request,res:Response)=>{
    const result = await store.index();
    res.status(200).json(result);
}

const show= async(req:Request,res:Response)=>{
    const id = parseInt(req.params.id);
    const result = await store.show(id);
    res.status(200).json(result);
}

const create= async(req:Request,res:Response)=>{
    try{
        if(jwt.verify(req.body.token,secret as string)){
        const produc:product =  {
            id: 0,
            name: req.body.name,
            price: req.body.price
        }
        const id = parseInt(req.body.id as string);
        const result = await store.create(produc);
        res.status(200).json(result);
        }
    }catch(err){
        res.json('sorry you are not authenticated');
    }

}


export default productroute;