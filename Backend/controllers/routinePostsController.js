import clone_routine from "../procedures/routine/clone_routine.js";

export const cloneRoutine = async (req, res) => {
  const { id_routine } = req.body;
  const username = req?.username;

  try {
    const response = await clone_routine({ id_routine, username });
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    return res.status(200).json({ msg: 'Something was wrong' });
  }
}