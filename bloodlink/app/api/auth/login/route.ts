import { NextResponse } from 'next/server';

// This is a mock user database. In a real application, this would be in a database
const users = [
  {
    email: 'donor@example.com',
    password: 'password123',
    role: 'donor'
  },
  {
    email: 'hospital@example.com',
    password: 'password123',
    role: 'hospital'
  },
  {
    email: 'admin@example.com',
    password: 'password123',
    role: 'admin'
  }
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // In a real application, you would:
    // 1. Hash the password
    // 2. Generate a JWT token
    // 3. Store session information
    // 4. Set proper security headers

    return NextResponse.json({
      role: user.role,
      email: user.email
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 