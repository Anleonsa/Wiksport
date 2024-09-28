import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"

export const usePublicExercises = () => {
  const [publicExercises, setPublicExercises] = useState([])

  const setInfo = async () => {
    const urlResource = '/exercise/all-exercises'
    const publicExercises = await GET({
      resource: urlResource
    })
    setPublicExercises(publicExercises)
  }
  useEffect(() => { setInfo() }, [])

  return { publicExercises }
}