import client from "../database";

export type order = {
    id: number;
    // product_id: number;
    // quantity: number;
    user_id: number;
    order_status: string;

}



export class ordermodel {
    async index(): Promise<order[]> {
        try {
            const conn = await client.connect();
            const sql = 'select order_id,user_id ,product_id ,quantity,order_status from order_products INNER JOIN orders on orders.id=order_products.order_id';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error('it is Error on getting specific order');
        }

    }

    async show(id: number): Promise<order[]> {
        try {
            const conn = await client.connect();
            const sql = 'select order_id,user_id ,product_id ,quantity,order_status from order_products INNER JOIN orders on orders.id=order_products.order_id where order_id=($1)';
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
            const sql = 'insert into orders (user_id,order_status) values ($1,$2) returning *';
            const result = await conn.query(sql,[ord.user_id,ord.order_status]);
            
            conn.release();
            
            return result.rows;
        } catch (err) {
            throw new Error('it is Error in creating this order');
        }

    }

    async addProduct(quantity: number, orderId: number, productId: number): Promise<order> {
        try {
        
          const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *'
     
          const conn = await client.connect();
          const result = await conn.query(sql,[quantity,orderId,productId]);
          const order = result.rows[0];
          conn.release();
    
          return order;

        } catch (err) {
          throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
        }
      }



}