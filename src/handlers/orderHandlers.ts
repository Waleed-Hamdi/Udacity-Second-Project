import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { order, ordermodel } from '../models/orderModel';

dotenv.config();

const secret = process.env.TOKEN_SECRET;
const store = new ordermodel();

const orderroute = (app: express.Application) => {
    app.get('/order/:id', show);
    app.get('/orders',index);
    app.post('/order', create);
    app.post('/orders/:id/products', addProduct)
}


const show = async (req: Request, res: Response) => {
    try {
        if (jwt.verify(req.body.token, secret as string)) {
            const id = parseInt(req.params.id as string);
            const result = await store.show(id);
            res.status(200).json(result);
        }

    } catch (err) {
        res.json('you have to be sure you pass token and order id  to me in request body ');
    }

}

const index = async (req: Request, res: Response) => {
    try {
        if (jwt.verify(req.body.token, secret as string)) {
            const result = await store.index();
            res.status(200).json(result);
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

const addProduct = async (_req: Request, res: Response) => {
    const orderId: number = parseInt(_req.params.id);
    
    const productId: number = parseInt(_req.body.productId);
    const quantity: number = parseInt(_req.body.quantity);
   
    try {
        if (jwt.verify(_req.body.token, secret as string)) {
            const addedProduct = await store.addProduct(quantity, orderId, productId)
            res.status(200).json(addedProduct)
        }
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}




export default orderroute;