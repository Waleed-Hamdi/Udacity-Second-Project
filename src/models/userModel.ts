import client from "../database";
import bcrypt from 'bcrypt';
import config from "../config";

const pepper = config.pepper;
const salt = config.salt;


export type user = {
    id : number,
    firstName: string,
    lastName: string,
    password: string
}

export class usermodel {

    async create(u:user): Promise<user[]> {
        try{
            const conn = await client.connect();
            const sql = 'insert into users (firstName,lastName,password) values($1,$2,$3) returning *';
            const hash = bcrypt.hashSync(
                u.password + pepper, 
                parseInt(salt as string,10)
              );
            const result = await conn.query(sql,[u.firstName,u.lastName,hash]);
            conn.release();
            return result.rows;
        }catch(err){
            throw new Error('can not create this user');
        }
    } 
    
    async index(): Promise<user[]>{
        try{
            const conn = await client.connect();
            const sql = 'select * from users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;

        }catch(err){
            throw new Error('you can not get all users info');
        }
    }

    async show(id:number): Promise<user[]>{
        try{
            const conn = await client.connect();
            const sql = 'select * from users where id = ($1)';
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows;

        }catch(err){
            throw new Error('you can not get this user info');
        }
    }


    
}