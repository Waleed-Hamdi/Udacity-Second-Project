import client from "../database";

export type order = {
    id: number;
    product_id: number;
    quantity: number;
    user_id: number;
    order_status: string;

}

export class ordermodel {
    async show(id: number): Promise<order[]> {
        try {
            const conn = await client.connect();
            const sql = 'select * from orders where id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error('it is Error on getting specific order');
        }

    }

    async create(ord: order): Promise<order[]> {
        try {
            const conn = await client.connect();
            const sql = 'insert into orders (product_id,quantity,user_id,order_status) values ($1,$2,$3,$4) returning *';
            const result = await conn.query(sql,[ord.product_id,ord.quantity,ord.user_id,ord.order_status]);
            
            conn.release();
            
            return result.rows;
        } catch (err) {
            throw new Error('it is Error in creating this order');
        }

    }



}