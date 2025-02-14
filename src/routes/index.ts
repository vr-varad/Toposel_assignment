import { Application } from "express";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

class Routes {
    constructor(app: Application){
        app.use('/api/v1/auth', AuthRoutes);
        app.use('/api/v1/user', UserRoutes);
    }
}

export default Routes;