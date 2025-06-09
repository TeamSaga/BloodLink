import jwt, { JwtPayload } from "jsonwebtoken";

export function verifyToken(token: string): JwtPayload | string {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
