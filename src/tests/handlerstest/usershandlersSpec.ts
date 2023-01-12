import supertest from "supertest";
import app from '../../server';


const request = supertest(app);


describe('test users handlers endpoints',()=>{
    it('test users index endpoint',async()=>{
        await request.get('/users').send({
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200);

    }),

    it('test user post endpoint',async()=>{
        await request.post('/user/create').send({
            "firstName":"mohamed ebn",
            "lastName":"abdellah",
            "password":"sherlock holmes19598"
        }).expect(200);

    }),

    it('test users show endpoint',async()=>{
        await request.get('/user/show').send({
            "id":1,
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
        }).expect(200);

    })

})