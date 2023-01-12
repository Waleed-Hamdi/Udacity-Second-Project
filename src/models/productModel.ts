import client from "../database";



export type product = {
    id: number;
    name: string;
    price: number;
}

export class productmodel {
    async index(): Promise<product[]> {
        try {
            const conn = await client.connect();
            const sql = 'select * from products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error('it is error for listing all products');
        }
    }

    async show(id: number): Promise<product[]> {
        try {
            const conn = await client.connect();
            const sql = 'select * from products where id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error('it is error for listing this product');
        }
    }

    async create(p: product): Promise<product[]> {
        try {
            const conn = await client.connect();
            const sql = 'insert into products (name,price) values ($1,$2) returning *';
            const result = await conn.query(sql, [p.name, p.price]);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error('it is error for creating this product');
        }
    }



}