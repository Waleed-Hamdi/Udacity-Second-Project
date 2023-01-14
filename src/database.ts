import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const {
    DB_HOST,
    TEST_DB_NAME,
    DEV_DB_NAME,
    DB_USER,
    DB_PASSWORD,
    NODE_ENV
} = process.env


const client = new Pool({
    host:DB_HOST,
    database:NODE_ENV === 'dev' ? DEV_DB_NAME : TEST_DB_NAME,
    user:DB_USER,
    password:DB_PASSWORD
});

export default client;