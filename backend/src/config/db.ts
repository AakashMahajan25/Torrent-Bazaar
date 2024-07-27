import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env";

const connectDB = async () => {
  try {
    mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log("Error while connecting to DB: ", error);
  }
};

export default connectDB;
