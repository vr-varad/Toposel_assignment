import { NextFunction, Request, Response } from "express";
import UserModel from "../models/Users";
import { ErrorCode } from '../utils/ErrorHandling'

export const GetUserByEmailOrUsername = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { email, username } = req.body

        if (!email && !username) {
            return res.status(ErrorCode.BAD_REQUEST).json({ message: 'Email or username is required' })
        }

        let user = null

        if (email) {
            user = await UserModel.findOne({ email })
        } else if (username) {
            user = await UserModel.findOne({ username })
        }

        if (!user) {
            return res.status(ErrorCode.USER_NOT_FOUND).json({ message: 'User not found' })
        }

        return res.status(ErrorCode.SUCCESS).json({ user })
    } catch (error) {
        console.log(error)
        return res.status(ErrorCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
}