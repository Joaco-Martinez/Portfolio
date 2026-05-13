"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = exports.technologySchema = void 0;
const zod_1 = require("zod");
exports.technologySchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    category: zod_1.z.string().min(2),
    level: zod_1.z.enum(["Básico", "Intermedio", "Avanzado"]),
});
exports.projectSchema = zod_1.z.object({
    slug: zod_1.z.string().min(2),
    title: zod_1.z.string().min(2),
    subtitle: zod_1.z.string().min(2),
    description: zod_1.z.string().min(15),
    problem: zod_1.z.string().min(15),
    impact: zod_1.z.string().min(10),
    features: zod_1.z.array(zod_1.z.string().min(2)).min(2),
    stack: zod_1.z.array(zod_1.z.string().min(2)).min(2),
    highlights: zod_1.z.array(zod_1.z.string().min(2)).min(1),
    imageUrl: zod_1.z.string().url(),
    accentColor: zod_1.z.string().min(4).default("#0ea5e9"),
    liveUrl: zod_1.z.string().url().optional(),
    repoUrl: zod_1.z.string().url().optional(),
    featured: zod_1.z.boolean().optional(),
});
