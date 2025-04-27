import { Request, Response } from "express";
import GPSTracking from "../models/GPSTracking";

export const createGPSTracking = async (req: Request, res: Response) => {
  try {
    req.body.current_time = Date.now();
    const gpsTracking = await GPSTracking.create(req.body);
    res.status(201).json(gpsTracking);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getGPSTrackingById = async (req: Request, res: Response) => {
  try {
    const gpsTracking = await GPSTracking.findByPk(Number(req.params.id));
    if (!gpsTracking) res.status(404).json({ error: "GPSTracking not found" });
    else res.json(gpsTracking);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateGPSTrackingById = async (req: Request, res: Response) => {
  try {
    const gpsTracking = await GPSTracking.findByPk(Number(req.params.id));
    if (!gpsTracking) res.status(404).json({ error: "GPSTracking not found" });
    else {
      await gpsTracking.update(req.body);
      res.json(gpsTracking);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
