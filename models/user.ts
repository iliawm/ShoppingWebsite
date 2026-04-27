import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    emailVerified: { type: Boolean, default: false },
    role: { type: String, default: "User" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    image: { type: String },
}, {collection: "user"});
export const user = mongoose.models.user || mongoose.model("user", UserSchema)
