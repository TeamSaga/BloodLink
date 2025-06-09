import type { NextApiResponse } from "next";
import type { ExtendedNextApiRequest } from "@/middleware/authMiddleware";
import { withAuth } from "@/middleware/authMiddleware";
import type { IUser } from "@/models/User";

const dashboardHandler = async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
  user: IUser & { _id: string }
) => {
  // return user info + role so frontend can decide what to show
  res.status(200).json({
    message: `Welcome to your dashboard, ${user.name || "User"}`,
    role: user.role,
    // you can add any other data needed for dashboard here
  });
};

export default withAuth(dashboardHandler, ["user", "admin", "moderator"]);
