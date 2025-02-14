import mongoose from "mongoose";

export interface UserDoc extends mongoose.Document {
    usernae: string;
    email: string;
    password: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date;
    country: string;
}

export enum Gender {
    Male,
    Female,
    Other
}

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: { type: Gender, required: true },
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true }
})

const UserModel = mongoose.model<UserDoc>("User", userSchema);

export default UserModel;