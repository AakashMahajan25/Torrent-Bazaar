import { APP_ORIGIN } from "../constants/env";
import {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
  UNPROCESSABLE_CONTENT,
} from "../constants/http";
import VerificationCodeType from "../constants/verificationCodeType";
import SessionModel, { SessionDocument } from "../models/session.model";
import UserModel, {UserDocument} from "../models/user.model";
import VerificationCodeModel from 