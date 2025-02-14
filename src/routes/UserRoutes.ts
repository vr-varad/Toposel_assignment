import express from 'express';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { GetUserByEmailOrUsername } from '../controllers/UserController';

class UserRoutes {
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use(AuthMiddleware)
        this.router.get('/', GetUserByEmailOrUsername);
    }
}


export default new UserRoutes().router;