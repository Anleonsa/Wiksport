import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET";

export const useRoutineInfo = ({ id }) => {
  const [routineInfo, setRoutineInfo] = useState({})

  const setInfo = async () => {
    const urlResource = '/routine/routine-info/' + id;
    const response = await GET({
      resource: urlResource
    })
    setRoutineInfo(response)
  }
  useEffect(() => { setInfo() }, [id])

  return { routineInfo }
}