import { Router, Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(Number(req.params.id));
    if (!user) res.status(404).json({ error: "User not found" });
    else res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
