import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { order, ordermodel } from '../models/orderModel';

dotenv.config();

const secret = process.env.TOKEN_SECRET;
const store = new ordermodel();

const orderroute = (app: express.Application) => {
    app.get('/order/:id', show);
    app.post('/order',create)
}


const show = async (req: Request, res: Response) => {
    try {
        if (jwt.verify(req.body.token, secret as string)) {
            const id = parseInt(req.params.id as string);
            const result = await store.show(id);
            res.json(result);
        }

    } catch (err) {
        res.json('you have to be sure you pass token and order id  to me in request body ');
    }

}

const create = async (req: Request, res: Response) => {
    try {
        if (jwt.verify(req.body.token, secret as string)) {
            const ord: order = {
                id: 0,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
                user_id: req.body.user_id,
                order_status: req.body.order_status
            }
            
            const result = await store.create(ord);
            
            res.status(200).json(result);
        }
    } catch (err) {
        res.json('sorry you are not authorized');
    }

}




export default orderroute;