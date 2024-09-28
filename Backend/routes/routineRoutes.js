import express from "express";
const router = express.Router();

import { middleware } from "../middleware/middleware.js";
import { getExercisesFromRoutine, getOneRoutineInfo, getPrivateRoutines, getPublicRoutines } from "../controllers/routineGetsController.js";
import { cloneRoutine } from "../controllers/routinePostsController.js";

router.get('/routine-info/:id', middleware, getOneRoutineInfo);
router.get('/routine-exercises/:id', middleware, getExercisesFromRoutine);

router.get('/public-routines', middleware, getPublicRoutines);
router.get('/private-routines', middleware, getPrivateRoutines);

router.post('/clone-routine', middleware, cloneRoutine);
export default router;