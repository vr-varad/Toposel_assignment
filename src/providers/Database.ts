import mongoose from "mongoose";


class Database{
    static MONGODB_URL: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

    static async init(){
        try {
            await mongoose.connect(this.MONGODB_URL, {
                dbName: "toposel"
            });
            console.log('Database connected');
        } catch (error) {
            console.error('Database connection failed');
            console.error(error);
        }
    }
}

export default Database;