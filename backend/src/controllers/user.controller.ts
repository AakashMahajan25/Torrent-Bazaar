import { NOT_FOUND, OK } from "../constants/http";
import UserModel from "../models/user.model";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { Request } from "express";

interface CustomRequest extends Request {
  userId?: string;
  sessionId?: string; // or the type of userId you're using
}

export const getUserHandler = catchErrors(async (req: CustomRequest, res) => {
  const user = await UserModel.findById(req.userId);
  appAssert(user, NOT_FOUND, "User nt found");
  return res.status(OK).json(user.omitPassword());
});
