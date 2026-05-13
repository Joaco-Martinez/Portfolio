"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const content_controller_1 = require("../controller/content.controller");
const router = (0, express_1.Router)();
router.get("/", content_controller_1.getContent);
router.post("/projects", content_controller_1.postProject);
router.post("/technologies", content_controller_1.postTechnology);
exports.default = router;
