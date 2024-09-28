import { useContext, useEffect } from "react"
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

const PublicRoutines = () => {
  const { who } = useContext(WhoContext)
  const { publicRoutines } = usePublicRoutines()
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
        <h1 className={css.main_title}>Rutinas públicas</h1>
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
