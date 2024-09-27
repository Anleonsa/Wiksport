import express from "express";
const router = express.Router();

import { middleware } from "../middleware/middleware.js";
import { getAllExercises } from "../controllers/exerciseGetsController.js";

router.get('/all-exercises', middleware, getAllExercises);

export default router;
