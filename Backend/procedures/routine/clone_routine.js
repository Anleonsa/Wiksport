import { callProcedure } from "../../config/call_procedure.js"

const clone_routine = async ({ id_routine, username }) => {
  try {
    const response = await callProcedure({
      procedureName: 'clonar_rutina',
      params: [id_routine, username],
    })
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default clone_routine
