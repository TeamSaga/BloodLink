import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/dbConnect";
import User, { IUser } from "@/models/User";
import { verifyToken } from "@/lib/auth";

export interface ExtendedNextApiRequest extends NextApiRequest {
  user?: IUser & { _id: string };
}

type HandlerWithUser = (
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
  user: IUser & { _id: string }
) => Promise<void> | void;

// Simple cookie parser to handle multiple cookies
function getTokenFromCookie(cookie: string, name = "token"): string | null {
  const cookies = cookie.split(";").map((c) => c.trim());
  for (const c of cookies) {
    if (c.startsWith(name + "=")) {
      return c.substring(name.length + 1);
    }
  }
  return null;
}

export const withAuth = (
  handler: HandlerWithUser,
  requiredRoles: Array<"user" | "admin" | "moderator">
) => {
  return async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    await connectDB();

    const cookie = req.headers.cookie;
    if (!cookie) {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permission" });
    }

    const token = getTokenFromCookie(cookie, "token");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    let decoded;
    try {
      decoded = verifyToken(token);
    } catch {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid or expired token" });
    }

    if (
      typeof decoded !== "object" ||
      decoded === null ||
      !("userId" in decoded)
    ) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token payload" });
    }

    const userId = (decoded as { userId: string }).userId;
    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: no user Id provided" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    if (!requiredRoles.includes(user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permission" });
    }

    req.user = user;
    return handler(req, res, user);
  };
};
