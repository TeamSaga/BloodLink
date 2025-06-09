import { Schema, model, models, Document } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: "user" | "admin" | "moderator";
}

interface UserDocument extends IUser, Document {}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin", "moderator"], default: "user" },
});

const User = models.User || model<UserDocument>("User", userSchema);

export default User;
