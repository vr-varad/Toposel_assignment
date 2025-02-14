import express from 'express';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

class UserRoutes {
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use(AuthMiddleware)
        this.router.get('/', (req, res) => {
            console.log(req.user);
            res.send("Hello from user route");
        });
    }
}


export default new UserRoutes().router;