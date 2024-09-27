import express from "express";
const router = express.Router();

import { middleware } from "../middleware/middleware.js";
import { getOneRoutineInfo } from "../controllers/routineGetsController.js";

router.get('/routine-info/:id', middleware, getOneRoutineInfo);

export default router;