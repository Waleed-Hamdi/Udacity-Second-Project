import dotenv from 'dotenv';

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    BCRYT_PASSWORD,
    SALT_ROUNDS,
    PORT
} = process.env

export default {
    postgres_host:POSTGRES_HOST,
    postgres_db:POSTGRES_DB,
    postgres_user:POSTGRES_USER,
    postgres_password:POSTGRES_PASSWORD,
    pepper: BCRYT_PASSWORD,
    salt: SALT_ROUNDS,
    port:PORT
}

