import { Request, Response } from "express";
import Activity from "../models/Activity";
import User from "../models/User";

export const createActivity = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user as User;
    req.body.user_id = user.id;
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getActivityById = async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByPk(Number(req.params.id));
    if (!activity) res.status(404).json({ error: "Activity not found" });
    else res.json(activity);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateActivityById = async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByPk(Number(req.params.id));
    if (!activity) res.status(404).json({ error: "Activity not found" });
    else {
      await activity.update(req.body);
      res.json(activity);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
