import mongoose from "mongoose";

// helper to connect to our mongo instance
const connectDB = async () => {
  try {
    console.log("Creating connection to your mongo instance");
    const conn = await mongoose.connect(process.env.MONGO_URI); // main line
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("MongoConnectionError", err);
    process.exit(1);
  }
};

export default connectDB;
