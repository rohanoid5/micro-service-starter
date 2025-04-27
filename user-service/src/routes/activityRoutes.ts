import express from "express";
import {
  createActivity,
  getActivityById,
  updateActivityById,
} from "../controllers/activityController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/activities", authenticate, createActivity);
router.get("/activities/:id", authenticate, getActivityById);
router.post("/activities/:id", authenticate, updateActivityById);

export default router;
