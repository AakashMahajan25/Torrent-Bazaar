import { Resend } from "resend";
import { RESEND_API_KEY } from "../constants/env";
import e from "express";

const resend = new Resend(RESEND_API_KEY);

export default resend;
