import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

// connecting to the database and starting the server
connectDB()
  .then((res) => {
    // detects errors which is from express
    app.on("error", (err) => {
      console.log("server start error:", err);
      process.exit(1);
    });

    // server will start
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log("Mongodb Connection error:", err);
  });
