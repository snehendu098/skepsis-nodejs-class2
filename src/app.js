import express from "express";

const app = express();

app.use(express.json());

// declare the routes
import todoRoutes from "./routes/todo.routes.js";

app.use("/api/v1/todo", todoRoutes);

export default app;
