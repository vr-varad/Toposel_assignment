import {z} from 'zod';

export const UserRegistrationSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8).max(100),
    fullName: z.string().min(3).max(100),
    gender: z.string().min(4).max(6),
    dateOfBirth: z.string().min(10).max(10),
    country: z.string().min(3).max(100)
})


export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100)
})