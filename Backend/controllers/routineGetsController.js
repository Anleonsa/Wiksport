import get_exercises_from_routine from "../procedures/routine/get_exercises_from_routine.js";
import get_one_routine_info from "../procedures/routine/get_one_routine_info.js";
import get_routines from "../procedures/routine/get_routines.js";

export const getOneRoutineInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await get_one_routine_info({ id });
    return res.status(200).json(response[0]);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}

export const getExercisesFromRoutine = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await get_exercises_from_routine({ id });
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}

export const getPublicRoutines = async (req, res) => {
  try {
    const response = await get_routines({ username: null });
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}

export const getPrivateRoutines = async (req, res) => {
  const username = req?.username
  try {
    const response = await get_routines({ username });
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}
