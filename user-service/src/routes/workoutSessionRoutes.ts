import express from "express";
import {
  createWorkoutSessions,
  getWorkoutSessionsById,
  updateWorkoutSessionsById,
} from "../controllers/workoutSessionController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/workout-sessions", authenticate, createWorkoutSessions);
router.get("/workout-sessions/:id", authenticate, getWorkoutSessionsById);
router.post("/workout-sessions/:id", authenticate, updateWorkoutSessionsById);

export default router;
