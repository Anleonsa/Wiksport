import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"
import Header from "../../components/site/Header/Header"
import ContentBox from "../../components/App/ContentBox/ContentBox"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import Main from "../../components/App/Main/Main"
import Footer from "../../components/App/Footer/Footer"
import { WhoContext } from "../../Routes"
import css from './PublicRoutines.module.css'
import { usePublicRoutines } from "../../hooks/usePublicRoutines"
import PublicRoutineCard from "../../components/App/PublicRoutineCard/PublicRoutineCard"
import HashTable from "../../services/Data Structures/HashTable"

const possible_difficulties = ['principiante', 'intermedio', 'avanzado']

const PublicRoutines = () => {
  const { who } = useContext(WhoContext)
  const { publicRoutines } = usePublicRoutines()
  const navigate = useNavigate()
  const [freqs, setFreqs] = useState([])

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  // Init Difficulty freqs
  useEffect(() => {
    if (!(publicRoutines === undefined || publicRoutines === null || publicRoutines?.length === 0)) {
      const hashTable = new HashTable(100)

      publicRoutines.map(routine => {
        const difficulty = routine.Nivel;

        if (hashTable.find(difficulty)) {
          const freq_now = hashTable.get(difficulty)
          hashTable.remove(difficulty)
          hashTable.add(difficulty, freq_now + 1)
        }
        else {
          hashTable.add(difficulty, 1)
        }
      })
      const hashTable_freqs = []
      possible_difficulties.map(diff => {
        if (hashTable.find(diff)) {
          hashTable_freqs.push({ fkey: diff, ffreq: hashTable.get(diff) })
        }
      })
      if (hashTable_freqs.length > 0) {
        setFreqs(hashTable_freqs)
      }
    }
  }, [publicRoutines])

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>Rutinas públicas</h1>

          <hr />

          <h2 className={css.subtitle}>Cantidad de rutinas por dificultad</h2>
          <section className={css.tags_container}>
            {freqs?.map((e, index) => (
              <div className={css.tag_item} key={index}>
                <span>Dificultad de {e.fkey} : {e.ffreq} ejercicios</span>
              </div>
            ))}
          </section>

          <hr />

          <section className={css.gallery_container}>
            {publicRoutines?.map(routine => (
              <PublicRoutineCard
                key={routine.Id_rutina}
                id={routine.Id_rutina}
                name={routine.Nombre_rutina}
                difficulty={routine.Nivel}
                rest_time_exercies={routine.Tiempo_descanzo_ejercicio}
                rest_time_series={routine.Tiempo_descanzo_serie}
              />
            ))}
          </section>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default PublicRoutines
