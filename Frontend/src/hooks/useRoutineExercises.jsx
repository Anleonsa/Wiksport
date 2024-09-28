import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"

export const useRoutineExercises = ({ id }) => {
  const [routineExercises, setRoutineExercises] = useState({})

  const setInfo = async () => {
    const urlResource = '/routine/routine-exercises/' + id
    const response = await GET({
      resource: urlResource
    })
    setRoutineExercises(response)
  }
  useEffect(() => { setInfo() }, [id])

  return { routineExercises }
}