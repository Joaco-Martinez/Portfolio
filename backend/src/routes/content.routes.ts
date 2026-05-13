import { Router } from "express";
import { getContent, postProject, postTechnology } from "../controller/content.controller";

const router = Router();

router.get("/", getContent);
router.post("/projects", postProject);
router.post("/technologies", postTechnology);

export default router;
