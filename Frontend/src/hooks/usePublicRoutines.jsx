import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"

export const usePublicRoutines = () => {
  const [publicRoutines, setPublicRoutines] = useState([])

  const setInfo = async () => {
    const urlResource = '/routine/public-routines'
    const response = await GET({
      resource: urlResource
    })
    setPublicRoutines(response)
  }
  useEffect(() => { setInfo() }, [])

  return { publicRoutines }
}