import { Request, Response } from "express";
import {
  createProject,
  createTechnology,
  listProjects,
  listTechnologies,
} from "../services/content.service";

export async function getContent(_req: Request, res: Response) {
  const [projects, technologies] = await Promise.all([
    listProjects(),
    listTechnologies(),
  ]);

  res.json({ projects, technologies });
}

export async function postTechnology(req: Request, res: Response) {
  const technology = await createTechnology(req.body);
  res.status(201).json(technology);
}

export async function postProject(req: Request, res: Response) {
  const project = await createProject(req.body);
  res.status(201).json(project);
}
