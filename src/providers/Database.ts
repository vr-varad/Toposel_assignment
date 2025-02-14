import mongoose from "mongoose";
import { config } from "../config/config";


class Database {
    static MONGODB_URL: string = config.MONGO_URL;

    static async init() {
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