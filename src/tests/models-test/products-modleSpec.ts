
import { product, productmodel } from "../../models/productModel";
import { user,usermodel } from "../../models/userModel";
import { order,ordermodel } from "../../models/orderModel";

const us:user = {
    id: 0,
    firstName: "wleed hamdi",
    lastName: "hassan",
    password: "0000000"
}
const usmod = new usermodel();

const ord:order = {
    id: 0,
    product_id: 1,
    quantity: 5,
    user_id: 1,
    order_status: "active"
}

const ordmod = new ordermodel();

const store = new productmodel();
const prod: product = {
    id: 0,
    name: "slamon",
    price: 50
}

const prod2: product = {
    id: 0,
    name: "fishchecken",
    price: 200
}


describe('Test products modle  methods', () => {
    it('test create method', async () => {
        const response = await store.create(prod);
        expect(response).not.toBeNull();
    }),

        it('test index method', async () => {
            const response = await store.index();
            expect(response).not.toBe([]);
        }),
        
        it('test create method', async () => {
            const response = await store.show(1);
            expect(response).not.toBeNull();
        })

     beforeAll(async ()=>{
        const response = await store.create(prod2);
        const res2 = await usmod.create(us);
       

     })   

    

});
