import mongoose from "mongoose";

export interface UserDoc extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    fullName: string;
    gender: string;
    dateOfBirth: Date;
    country: string;
}

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            delete ret.createdAt;
            delete ret.updatedAt;
        } 
    }
})

const UserModel = mongoose.model<UserDoc>("User", userSchema);

export default UserModel;