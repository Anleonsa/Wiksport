import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"

export const useMyRoutines = () => {
  const [myRoutines, setMyRoutines] = useState([])

  const setInfo = async () => {
    const urlResource = '/routine/private-routines'
    const response = await GET({
      resource: urlResource
    })
    setMyRoutines(response)
  }
  useEffect(() => { setInfo() }, [])

  return { myRoutines }
}