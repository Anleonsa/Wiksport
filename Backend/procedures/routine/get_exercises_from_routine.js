import { callFunction } from "../../config/call_function.js";

export const get_exercises_from_routine = async ({ id }) => {
  try {
    const response = await callFunction({
      functionName: 'ejercicios_rutina',
      params: [id]
    });
    console.log(response)
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default get_exercises_from_routine;
