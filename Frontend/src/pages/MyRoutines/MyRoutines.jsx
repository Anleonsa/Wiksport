import css from './MyRoutines.module.css'

import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"
import { useMyRoutines } from '../../hooks/useMyRoutines'
import PrivateRoutineCard from '../../components/App/PrivateRoutineCard/PrivateRoutineCard'

const MyRoutines = () => {
  const { who } = useContext(WhoContext)
  const { myRoutines } = useMyRoutines()
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
        <h1 className={css.main_title}>Mis rutinas</h1>
          <section className={css.gallery_container}>
          {myRoutines?.map(routine => (
              <PrivateRoutineCard
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
export default MyRoutines