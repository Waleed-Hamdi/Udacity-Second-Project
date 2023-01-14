import dotenv from 'dotenv';

dotenv.config();

const {
    DB_HOST,
    TEST_DB_NAME,
    DEV_DB_NAME,
    DB_USER,
    DB_PASSWORD,
    BCRYT_PASSWORD,
    SALT_ROUNDS,
    PORT,
    NODE_ENV
} = process.env

export default {
    postgres_host:DB_HOST,
    postgres_db:NODE_ENV === 'dev' ? DEV_DB_NAME : TEST_DB_NAME,
    postgres_user:DB_USER,
    postgres_password:DB_PASSWORD,
    pepper: BCRYT_PASSWORD,
    salt: SALT_ROUNDS,
    port:PORT
}

