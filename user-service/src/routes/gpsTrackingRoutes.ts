import express from "express";
import {
  createGPSTracking,
  getGPSTrackingById,
  updateGPSTrackingById,
} from "../controllers/gpsTrackingController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/gps-trackings", authenticate, createGPSTracking);
router.get("/gps-trackings/:id", authenticate, getGPSTrackingById);
router.post("/gps-trackings/:id", authenticate, updateGPSTrackingById);

export default router;
