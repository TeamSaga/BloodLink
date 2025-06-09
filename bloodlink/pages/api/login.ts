import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/dbConnect";
import User, { IUser } from "@/models/User";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type Data = {
  message?: string;
  error?: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    await connectDB();

    const { username, email, password } = req.body;

    try {
      // Check if email is registered
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      //Compare the password with hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      //Generate a JWT token
      const JWT_SECRET = process.env.JWT_SECRET;
      if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
      }
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      setCookie("token", token, {
        req,
        res,
        httpOnly: true,
        sameSite: "strict", // prevent CSRF attacks
        maxAge: 60 * 60, // 1 hour
        path: "/", // available for all routes
      });

      res.status(200).json({ token, message: "Login successful" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
