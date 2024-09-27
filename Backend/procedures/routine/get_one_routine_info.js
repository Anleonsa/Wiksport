import { callProcedure } from "../../config/call_procedure.js"

const get_one_routine_info = async ({ id }) => {
  try {
    const response = await callProcedure({
      procedureName: 'search_one_rutina',
      params: [id],
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default get_one_routine_info;
