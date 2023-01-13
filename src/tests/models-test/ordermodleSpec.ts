import { order, ordermodel } from "../../models/orderModel";


const store = new ordermodel();

const ord: order = {
    id: 0,
    // product_id: 1,
    // quantity: 5,
    user_id: 1,
    order_status: "active"
}






describe('Test orders modle  methods', () => {

    it('test create order method', async () => {
        const response = await store.create(ord);
        expect(response).not.toBe([]);
    }),


    it('test show order method', async () => {
        await store.create(ord);

        const response = await store.show(5);
        expect(response).not.toBeNull();
    })
    
    


});
