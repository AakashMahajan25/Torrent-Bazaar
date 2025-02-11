import { z } from "zod";
import { NOT_FOUND, OK } from "../constants/http";
import SessionModel from "../models/session.model";
import catchErrors from "../utils/catchErrors";
import appAssert from "../utils/appAssert";
import { Request } from "express";

interface CustomRequest extends Request {
  userId?: string;
  sessionId?: string; // or the type of userId you're using
}

export const getSessionHandler = catchErrors(
  async (req: CustomRequest, res) => {
    const sessions = await SessionModel.find(
      {
        userId: req.userId,
        expiresAt: { $gt: Date.now() },
      },
      {
        _id: 1,
        userAgent: 1,
        createdAt: 1,
      },
      {
        sort: { createdAt: -1 },
      }
    );

    return res.status(OK).json(
      // Marks the current Session
      sessions.map((session) => ({
        ...session.toObject(),
        ...(session.id === req.sessionId && {
          isCurrent: true,
        }),
      }))
    );
  }
);

export const deleteSessionHandler = catchErrors(
  async (req: CustomRequest, res) => {
    const sessionId = z.string().parse(req.params.id);
    const deleted = await SessionModel.findOneAndDelete({
      _id: sessionId,
      userId: req.userId,
    });
    appAssert(deleted, NOT_FOUND, "Session not found");
    return res.status(OK).json({ message: "Session removed" });
  }
);
