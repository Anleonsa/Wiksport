import get_one_routine_info from "../procedures/routine/get_one_routine_info.js";

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