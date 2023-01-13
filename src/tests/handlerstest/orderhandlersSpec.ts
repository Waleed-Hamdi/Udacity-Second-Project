import supertest from "supertest";
import app from '../../server';

const request = supertest(app);

describe('testing order handlers endpoint',()=>{
    it('test show specific order endpoint',async()=>{
        await request.get('/order/1').send({
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200)

    }),

    it('test create order post endpoint',async()=>{
        await request.post('/order').send({
            // "product_id": 1,
            // "quantity": 5,
            "user_id": 1,
            "order_status" : "active",
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200)

    }),

    it('test get all orders endpoint',async()=>{
        await request.get('/orders').send({
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200)

    }),
    it('test add product to order endpoint',async()=>{
        await request.post('/orders/1/products').send({
            "productId":"1",
            "quantity":"5",
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200)

    })
})