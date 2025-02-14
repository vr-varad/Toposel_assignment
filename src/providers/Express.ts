import express, { Application } from "express";


class Express {
    static app: Application = express()
    static PORT = process.env.PORT || 3000

    static init() {
        this.app.use(express.json());
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}

export default Express;