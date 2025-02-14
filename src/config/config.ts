require('dotenv').config(); 

export const config = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
}