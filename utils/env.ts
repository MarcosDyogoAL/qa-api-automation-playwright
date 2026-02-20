import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    REQRES_API_KEY: process.env.REQRES_API_KEY || ''
};
