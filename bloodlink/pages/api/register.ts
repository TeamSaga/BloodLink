import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/dbConnect";
import User, { IUser } from "@/models/User";
import bcrypt from "bcrypt";

type Data = {
  message?: string;
  error?: string;
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
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save new user to DB
      const newUser: IUser = {
        name: username,
        email,
        password: hashedPassword,
        role: "user",
      };

      await User.create(newUser);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
