import { NextFunction, Request, Response } from "express";
import UserModel from "../models/Users";

export const GetUserByEmailOrUsername = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { email, username } = req.body

        if (!email && !username) {
            return res.status(400).json({ message: 'Email or username is required' })
        }

        if (email && username) {
            return res.status(400).json({ message: 'Email and username cannot be used together' })
        }

        let user = null

        if (email) {
            user = await UserModel.findOne({ email })
        }

        if (username) {
            user = await UserModel.findOne({ username })
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}