import express from 'express';
import { UserLogin, UserRegistration } from '../controllers/AuthController';

class AuthRoutes {
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/login', UserLogin);
        this.router.post('/register', UserRegistration);
    }

}


export default new AuthRoutes().router;