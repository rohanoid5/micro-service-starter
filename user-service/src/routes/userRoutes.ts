import express from "express";
import {
  createUser,
  getUserById,
  updateUserById,
} from "../controllers/userController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:id", authenticate, getUserById);
router.post("/users/:id", authenticate, updateUserById);

export default router;
