import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import User, { IUser } from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  await connectDB();

  try {
    const { username, email, password } = await request.json();

    // Check if email is registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
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

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 