import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { config } from '../config/config'

export const GenerateSalt = async () => {
    return await bcrypt.genSalt(10)
}

export const GenerateHashPassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt)
}

export const VerifyPassword = (
    enteredPassword: string,
    hashedPassword: string,
) => {
    return bcrypt.compare(enteredPassword, hashedPassword)
}

export const GenerateToken = (payload: any) => {
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' })
}

export const ValidateToken = (token: string) => {
    return jwt.verify(token, config.JWT_SECRET)
}