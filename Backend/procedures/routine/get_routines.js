import { callProcedure } from "../../config/call_procedure.js"

const get_routines = async ({ username }) => {
  let wich_params = [];

  if (username !== null && username !== undefined) {
    wich_params.push(username);
  }
  else {
    wich_params.push('null');
  }

  try {
    const response = await callProcedure({
      procedureName: 'search_rutina',
      params: wich_params,
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default get_routines;
