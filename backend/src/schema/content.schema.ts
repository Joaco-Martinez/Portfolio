import { z } from "zod";

export const technologySchema = z.object({
  name: z.string().min(2),
  category: z.string().min(2),
  level: z.enum(["Básico", "Intermedio", "Avanzado"]),
});

export const projectSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  subtitle: z.string().min(2),
  description: z.string().min(15),
  problem: z.string().min(15),
  impact: z.string().min(10),
  features: z.array(z.string().min(2)).min(2),
  stack: z.array(z.string().min(2)).min(2),
  highlights: z.array(z.string().min(2)).min(1),
  imageUrl: z.string().url(),
  accentColor: z.string().min(4).default("#0ea5e9"),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  featured: z.boolean().optional(),
});
