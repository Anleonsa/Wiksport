import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect, useRef, useState } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate, useParams } from "react-router-dom"
import { ROLES } from "../../data/data"
import css from './RunRoutine.module.css'
import { useRoutineInfo } from "../../hooks/useRoutineInfo"
import Queue from "../../services/Data Structures/Queue"
import MaxHeap from "../../services/Data Structures/MaxHeap"
import Chronometer from "../../components/App/Chronometer/Chronometer"
import Counter from "../../components/App/Counter/Counter"
import Swal from "sweetalert2"

const RoutineData = ({ routineName, routineDifficulty, restTimeExercises, restTimeSeries }) => {
  return (
    <section className={css.routineData}>
      <h2 className={css.routineNameSubtitle}>{routineName}</h2>
      <div className={css.routine_info}>
        <div className={css.routine_info_item}>
          <span>Nombre de la rutina</span>
          <span>{routineName}</span>
        </div>
        <div className={css.routine_info_item}>
          <span>Dificultad</span>
          <span>{routineDifficulty}</span>
        </div>
        <div className={css.routine_info_item}>
          <span>Tiempo de descanso entre ejercicios distintos</span>
          <span>{restTimeExercises} segundos</span>
        </div>
        <div className={css.routine_info_item}>
          <span>Tiempo de descanso entre series del mismo ejercicio</span>
          <span>{restTimeSeries} segundos</span>
        </div>
      </div>
    </section>
  )
}

const Initial_interface = ({ nextFun }) => {
  return (
    <div className={css.btn_init_routine_container}>
      <button onClick={nextFun} className={css.btn_init_routine}>Iniciar rutina</button>
    </div>
  )
}

const RunRoutine = () => {
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()
  const { mode, id } = useParams()
  const { routineInfo } = useRoutineInfo({ id })
  const [nowExercise, setNowExercise] = useState(null)

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])
  const queue = useRef(new Queue())
  const pq = useRef(new MaxHeap())

  const initQueue = () => {
    while (!queue.current.Empty()) queue.current.dequeue();
    while (!pq.current.empty()) pq.current.pop();

    for (const i in routineInfo?.['ejercicios_rutina(S_id_rutina)']) {
      const obj = routineInfo['ejercicios_rutina(S_id_rutina)'][i]
      if (obj != undefined) pq.current.push(obj)
    }

    if (mode === 'normal') {
      for (const i in routineInfo?.['ejercicios_rutina(S_id_rutina)']) {
        const obj = routineInfo['ejercicios_rutina(S_id_rutina)'][i]
        for (let i = 0; i < obj?.Cantidad_series; ++i) {
          if (obj != undefined) {
            const to_insert = { ...obj }
            to_insert.er_type = 'E'
            to_insert.current_serie = i + 1

            queue.current.enqueue({ er_type: 'R' })
            queue.current.enqueue(to_insert)
          }
        }
      }
    }
    else if (mode === 'order') {
      while (!pq.current.empty()) {
        const obj = pq.current.top()

        for (let i = 0; i < obj?.Cantidad_series; ++i) {
          if (obj != undefined) {
            const to_isert = { ...obj }
            to_isert.er_type = 'E'
            to_isert.current_serie = i + 1

            queue.current.enqueue({ er_type: 'R' })
            queue.current.enqueue(to_isert)
          }
        }
        pq.current.pop()
      }
    }
    if (!queue.current.Empty() && queue.current.First().er_type === 'R') queue.current.dequeue()
  }
  useEffect(initQueue, [routineInfo])

  const finish = () => {
    Swal.fire({
      title: '¡Felicidades!, completaste la rutina',
      color: '#eee',
      background: '#000',
      confirmButtonColor: "#09f",
      confirmButtonText: 'Volver a mis rutinas',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/mis-rutinas')
      } else {
        navigate('/mis-rutinas')
      }
    });
  }

  console.log(routineInfo)

  const next = () => {
    if (queue.current.Empty()) finish();
    else {
      const nextExercise = queue.current.First()
      queue.current.dequeue()
      setNowExercise(nextExercise)
    }
  }

  const RestInterface = ({ }) => {
    return (
      <div className={css.rest_interface}>
        <h3 className={css.rest_interface_subtitle}>Tiempo de descanso</h3>
        <Chronometer />
        <div className={css.rest_interface_button_container}>
          <button className={css.rest_interface_btn_continue} onClick={next}>Continuar con la rutina</button>
        </div>
      </div>
      
    )
  }

  const ExerciseInterface = () => {
    let last_serie = nowExercise?.current_serie === nowExercise?.Cantidad_series

    let btn_next_text;

    if (queue.current.Empty()) {
      btn_next_text = 'Finalizar rutina'
    }
    else if (last_serie) {
      btn_next_text = 'Siguiente ejercicio'
    }
    else {
      btn_next_text = 'Siguiente serie'
    }

    return (
      <div className={css.interface_exercises}>
        <div className={css.interface_exercise_info_container}>
          <h3 className={css.interface_exercise_info_name}>Ejercicio: {nowExercise?.Nombre}</h3>
          <img className={css.interface_exercise_info_img} src={nowExercise?.Imagen} alt="exercise img" />
          <span className={css.interface_exercise_info_series}>Dificultad del ejercicio: {nowExercise?.Dificultad} / 10</span>
          <span className={css.interface_exercise_info_series}>Series a cumplir: {nowExercise?.Cantidad_series}</span>
          <span className={css.interface_exercise_info_cur_serie}>Serie actual: {nowExercise?.current_serie}</span>
          <span className={css.interface_exercise_info_amount}>Repeticiones a cumplir: {nowExercise?.Cantidad_ejercicios}</span>
        </div>
        <hr />
        {nowExercise?.Tipo_ejecucion === 'R' && <Counter />}
        {nowExercise?.Tipo_ejecucion === 'T' && <Chronometer />}

        <div className={css.interface_exercise_button_container}>
          <button className={css.interface_exercise_btn_next} onClick={next}>{btn_next_text}</button>
        </div>

      </div>
    )
  }

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>Ejecutar rutina</h1>
          <RoutineData
            routineName={routineInfo?.Nombre_rutina}
            routineDifficulty={routineInfo?.Nivel}
            restTimeExercises={routineInfo?.Tiempo_descanzo_ejercicio}
            restTimeSeries={routineInfo?.Tiempo_descanzo_serie}
          />

          {nowExercise === null && <Initial_interface nextFun={next} />}
          {(nowExercise != null && nowExercise?.er_type === 'E') && <ExerciseInterface />}
          {(nowExercise != null && nowExercise?.er_type === 'R') && <RestInterface />}
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default RunRoutine