import express from "express";
import { createUser, getUserById } from "../controllers/userController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:id", authenticate, getUserById);

export default router;
