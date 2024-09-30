import { useNavigate } from 'react-router-dom'
import css from './PublicRoutineCard.module.css'
import { POST } from '../../../services/CRUD/POST'
import Swal from 'sweetalert2'

const PublicRoutineCard = ({ id, name, difficulty, rest_time_exercies, rest_time_series}) => {
  
  const navigate = useNavigate()

  const navigateSeeMore = () => {
    const url = '/rutina/' + id
    navigate(url)
  }

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
      <div className={css.card}>
        <div className={css.routine_info_container}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.routine_info}>
            <div className={css.routine_info_item}>
              <span>Dificultad</span>
              <span>{difficulty}</span>
            </div>
            <div className={css.routine_info_item}>
              <span>Tiempo de descanso entre ejercicios distintos</span>
              <span>{rest_time_exercies} segundos</span>
            </div>
            <div className={css.routine_info_item}>
              <span>Tiempo de descanso entre series del mismo ejercicio</span>
              <span>{rest_time_series} segundos</span>
            </div>
          </div>
        </div>
        <div className={css.buttons_container}>
          <span onClick={cloneRoutine} className={css.button + ' ' + css.button_clone}>Hacer mía esta rutina</span>
          <span onClick={navigateSeeMore} className={css.button + ' ' + css.button_see_more}>ver más</span>
        </div>
      </div>
    </>
  )
}
export default PublicRoutineCard
