import { NextFunction, Request, Response } from "express";
import { ValidateToken } from "../utils/PasswordUtility";
import UserModel, { UserDoc } from "../models/Users";

declare module "express-serve-static-core" {
    interface Request {
      user?: UserDoc;
    }
  }

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const payload: any = ValidateToken(token);
        const user = await UserModel.findOne({ _id: payload.userId });
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = user as any;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}