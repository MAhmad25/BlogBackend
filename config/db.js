import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const main = async () => {
      try {
            await mongoose.connect(process.env.DB_URL);
            console.log("MongoDB Connected");
      } catch (error) {
            console.error(error.message);
            process.exit(1);
      }
};
export default main;
