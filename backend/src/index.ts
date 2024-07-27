import connectDB from "./config/db";
import app from "./app";
import { PORT } from "./constants/env";

try {
  connectDB().then(() => {
    console.log("Database Connected Successfully!");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  });
} catch (error) {
  console.log("Error connecting to Database: " + error);
}
