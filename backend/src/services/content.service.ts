import { Project, Technology } from "@prisma/client";
import { prisma } from "../db";
import { projectSchema, technologySchema } from "../schema/content.schema";

export async function listTechnologies(): Promise<Technology[]> {
  return prisma.technology.findMany({ orderBy: [{ category: "asc" }, { name: "asc" }] });
}

export async function listProjects(): Promise<Project[]> {
  return prisma.project.findMany({ orderBy: { updatedAt: "desc" } });
}

export async function createTechnology(data: unknown): Promise<Technology> {
  const parsed = technologySchema.parse(data);
  return prisma.technology.upsert({
    where: { name: parsed.name },
    update: parsed,
    create: parsed,
  });
}

export async function createProject(data: unknown): Promise<Project> {
  const parsed = projectSchema.parse(data);
  return prisma.project.upsert({
    where: { slug: parsed.slug },
    update: parsed,
    create: parsed,
  });
}
