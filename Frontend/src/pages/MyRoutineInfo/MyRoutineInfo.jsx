import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect, useRef } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate, useParams } from "react-router-dom"
import { ROLES } from "../../data/data"
import ExerciseCard from "../../components/App/ExerciseCard/ExerciseCard"
import css from './MyRoutineInfo.module.css'
import { useRoutineInfo } from "../../hooks/useRoutineInfo"
import ExerciseListItem from "../../components/App/ExerciseListItem/ExerciseListItem"
import { POST } from "../../services/CRUD/POST"
import Swal from "sweetalert2"

const MyRoutineInfo = () => {
  const { who } = useContext(WhoContext)
  const { id } = useParams()
  const { routineInfo } = useRoutineInfo({ id })
  const navigate = useNavigate()

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  const run = () => {
    Swal.fire({
      title: 'Cómo quieres hacer la rutina',
      text: 'Puedes realizar los ejercicios en el orden establecido normal, u ordenado por dificultad descendentemente',
      icon: 'question',
      color: '#eee',
      background: '#000',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "#09f",
      confirmButtonText: 'Orden normal',
      denyButtonText: 'Orden por dificultad',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/hacer-rutina/normal/${id}`)
      } else if (result.isDenied) {
        navigate(`/hacer-rutina/order/${id}`)
      } else if (result.isDismissed) {
      }
    });
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
          <div className={css.do_btn_container}>
            <span className={css.do_btn}>Hacer esta rutina</span>
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
          
          <div className={css.do_btn_container}>
            <span onClick={run} className={css.do_btn}>Hacer esta rutina</span>
          </div>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default MyRoutineInfo
