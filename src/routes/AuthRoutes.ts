import express from 'express';

class AuthRoutes {
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/login', (req, res) => {
            res.send('Login route');
        });

        this.router.post('/register', (req, res) => {
            res.send('Register route');
        });
    }

}


export default new AuthRoutes().router;