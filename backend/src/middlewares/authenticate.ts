import { RequestHandler, Request } from "express";
import appAssert from "../utils/appAssert";
import AppErrorCode from "../constants/appErrorCode";
import { UNAUTHORIZED } from "../constants/http";
import { verifyToken } from "../utils/jwt";

//Extend the Request interface to include userId and sessionId
interface AuthenticatedRequest extends Request {
  userId?: any;
  sessionId?: any;
}

//Wrap with catchErrors() if you need this to be async
const authenticate: RequestHandler = (req: AuthenticatedRequest, res, next) => {
  const accessToken = req.cookies.accessToken as string | undefined;
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Not Authorized",
    AppErrorCode.InvalidAccessToken
  );

  const { error, payload } = verifyToken(accessToken);
  appAssert(
    payload,
    UNAUTHORIZED,
    error === "jwt expires" ? "Token Expired" : "Invalid Token",
    AppErrorCode.InvalidAccessToken
  );

  req.userId = payload.userId;
  req.sessionId = payload.sessionId;
  next();
};

export default authenticate;
