import express from 'express';

class UserRoutes {
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', (req, res) => {
            res.send('User route');
        });
    }
}


export default new UserRoutes().router;