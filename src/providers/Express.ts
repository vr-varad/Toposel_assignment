import express, { Application } from "express";
import Routes from "../routes";


class Express {
    static app: Application = express()
    static PORT = process.env.PORT || 3000

    static init() {
        this.app.use(express.json());
        new Routes(this.app);
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}

export default Express;