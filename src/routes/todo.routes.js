import { Router } from "express";
import { createTodo, todoDone } from "../controllers/todo.controller.js";

const router = Router();

router.route("/create").post(createTodo);
router.route("/complete/:id").patch(todoDone);

// Assignment: Head over to the controller file, create the functions as specified and creates routes for the same (ask me or others for help)

export default router;
