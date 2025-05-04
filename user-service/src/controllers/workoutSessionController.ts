import { Request, Response } from "express";
import WorkoutSessions from "../models/WorkoutSessions";

export const createWorkoutSessions = async (req: Request, res: Response) => {
  try {
    req.body.current_time = Date.now();
    const workoutSession = await WorkoutSessions.create(req.body);
    res.status(201).json(workoutSession);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getWorkoutSessionsById = async (req: Request, res: Response) => {
  try {
    const workoutSession = await WorkoutSessions.findByPk(
      Number(req.params.id)
    );
    if (!workoutSession)
      res.status(404).json({ error: "WorkoutSession not found" });
    else res.json(workoutSession);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateWorkoutSessionsById = async (
  req: Request,
  res: Response
) => {
  try {
    const workoutSession = await WorkoutSessions.findByPk(
      Number(req.params.id)
    );
    if (!workoutSession)
      res.status(404).json({ error: "WorkoutSession not found" });
    else {
      await workoutSession.update(req.body);
      res.json(workoutSession);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
