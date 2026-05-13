"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContent = getContent;
exports.postTechnology = postTechnology;
exports.postProject = postProject;
const content_service_1 = require("../services/content.service");
async function getContent(_req, res) {
    const [projects, technologies] = await Promise.all([
        (0, content_service_1.listProjects)(),
        (0, content_service_1.listTechnologies)(),
    ]);
    res.json({ projects, technologies });
}
async function postTechnology(req, res) {
    const technology = await (0, content_service_1.createTechnology)(req.body);
    res.status(201).json(technology);
}
async function postProject(req, res) {
    const project = await (0, content_service_1.createProject)(req.body);
    res.status(201).json(project);
}
