import get_all_exercises from "../procedures/exercise/get_all_exercises.js";

export const getAllExercises = async (req, res) => {
  try {
    const response = await get_all_exercises();
    return res.status(200).json(response)
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}