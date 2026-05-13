"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTechnologies = listTechnologies;
exports.listProjects = listProjects;
exports.createTechnology = createTechnology;
exports.createProject = createProject;
const db_1 = require("../db");
const content_schema_1 = require("../schema/content.schema");
async function listTechnologies() {
    return db_1.prisma.technology.findMany({ orderBy: [{ category: "asc" }, { name: "asc" }] });
}
async function listProjects() {
    return db_1.prisma.project.findMany({ orderBy: { updatedAt: "desc" } });
}
async function createTechnology(data) {
    const parsed = content_schema_1.technologySchema.parse(data);
    return db_1.prisma.technology.upsert({
        where: { name: parsed.name },
        update: parsed,
        create: parsed,
    });
}
async function createProject(data) {
    const parsed = content_schema_1.projectSchema.parse(data);
    return db_1.prisma.project.upsert({
        where: { slug: parsed.slug },
        update: parsed,
        create: parsed,
    });
}
