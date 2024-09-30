import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate, useParams } from "react-router-dom"
import { ROLES } from "../../data/data"
import ExerciseCard from "../../components/App/ExerciseCard/ExerciseCard"
import css from './PublicRoutineInfo.module.css'
import { useRoutineInfo } from "../../hooks/useRoutineInfo"
import ExerciseListItem from "../../components/App/ExerciseListItem/ExerciseListItem"
import { POST } from "../../services/CRUD/POST"
import Swal from "sweetalert2"

const PublicRoutineInfo = () => {
  const { who } = useContext(WhoContext)
  const { id } = useParams()
  const { routineInfo } = useRoutineInfo({ id })
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  const cloneRoutine = async () => {
    try {
      await POST({
        resource: '/routine/clone-routine',
        body: {
          id_routine: id
        }
      })
      Swal.fire({
        icon: 'success',
        title: 'Se ha agregado esta rutina a tus rutinas exitosamente'
      })
    }
    catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error'
      })
    }
  }

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>{routineInfo?.Nombre_rutina}</h1>
          <section className={css.routine_info}>
            <div className={css.routine_info_item}>
              <span>Nombre de la rutina</span>
              <span>{routineInfo?.Nombre_rutina}</span>
            </div>
            <div className={css.routine_info_item}>
              <span>Dificultad</span>
              <span>{routineInfo?.Nivel}</span>
            </div>
            <div className={css.routine_info_item}>
              <span>Tiempo de descanso entre ejercicios distintos</span>
              <span>{routineInfo?.Tiempo_descanzo_ejercicio} segundos</span>
            </div>
            <div className={css.routine_info_item}>
              <span>Tiempo de descanso entre series del mismo ejercicio</span>
              <span>{routineInfo?.Tiempo_descanzo_serie} segundos</span>
            </div>
          </section>
          <div className={css.clone_btn_container}>
            <span onClick={cloneRoutine} className={css.clone_btn}>Hacer mía esta rutina</span>
          </div>
          <h2 className={css.subtitle}>Ejercicios de la rutina</h2>
          <section className={css.exercises_section}>
            {routineInfo?.['ejercicios_rutina(S_id_rutina)']?.map(exercise => (
              <ExerciseListItem
                key={exercise.Id_ejercicio}
                position={exercise.Posicion}
                img={exercise.Imagen}
                name={exercise.Nombre}
                amount={exercise.Cantidad_ejercicios}
                series={exercise.Cantidad_series}
                category={exercise.Categoria}
                difficulty={exercise.Dificultad}
                muscles={exercise.Musculos}
                execution_type={exercise.Tipo_ejecucion}
                description={exercise.Descripcion}
              />
            ))}
          </section>
          
          <div className={css.clone_btn_container}>
            <span onClick={cloneRoutine} className={css.clone_btn}>Hacer mía esta rutina</span>
          </div>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default PublicRoutineInfo
