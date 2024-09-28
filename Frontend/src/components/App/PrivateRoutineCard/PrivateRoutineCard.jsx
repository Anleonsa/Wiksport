import { useNavigate } from 'react-router-dom'
import css from './PrivateRoutineCard.module.css'
import Swal from 'sweetalert2'

const PrivateRoutineCard = ({ id, name, difficulty, rest_time_exercies, rest_time_series}) => {
  const navigate = useNavigate()

  const navigateSeeMore = () => {
    const url = '/mi-rutina/' + id
    navigate(url)
  }

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
          <span onClick={run} className={css.button + ' ' + css.button_clone}>Hacer esta rutina</span>
          <span onClick={navigateSeeMore} className={css.button + ' ' + css.button_see_more}>ver más</span>
        </div>
      </div>
    </>
  )
}
export default PrivateRoutineCard