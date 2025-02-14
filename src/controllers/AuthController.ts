import { Request, Response } from "express";
import { UserRegistrationSchema, UserLoginSchema } from "../schema/UserSchema";
import UserModel from "../models/Users";
import { GenerateHashPassword, GenerateSalt, GenerateToken, VerifyPassword } from "../utils/PasswordUtility";

export const UserRegistration = async (req: Request, res: Response): Promise<any> => {
    try {
        const { success, data } = UserRegistrationSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ error: "Invalid data" });
        }

        const { username, password, email, fullName, gender, dateOfBirth, country } = data

        const existingUser = await UserModel.find({
            email
        })

        if (existingUser.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await GenerateSalt();
        const hashedPassword = await GenerateHashPassword(password, salt);

        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            fullName,
            gender,
            dateOfBirth,
            country
        }) 

        const jwtToken = GenerateToken({
            userId: user._id
        })

        return res.status(201).json({ message: "User created successfully", token: jwtToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const UserLogin = async (req: Request, res: Response): Promise<any> => {
    try {
        const { success, data } = UserLoginSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ error: "Invalid data" });
        }

        const { email, password } = data;
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isPasswordValid = await VerifyPassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const jwtToken = GenerateToken({
            userId: user._id
        })

        return res.status(200).json({ message: "Login successful", token: jwtToken, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}