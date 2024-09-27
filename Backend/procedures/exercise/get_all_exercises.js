import { callProcedure } from "../../config/call_procedure.js";

const get_all_exercises = async () => {
  try {
    const response = await callProcedure({
      procedureName: 'search_ejercicios',
      params: []
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default get_all_exercises;
