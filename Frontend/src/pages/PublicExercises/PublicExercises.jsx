import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"
import { usePublicExercises } from "../../hooks/usePublicExercises"
import ExerciseCard from "../../components/App/ExerciseCard/ExerciseCard"
import css from './PublicExercises.module.css'

const PublicExercises = () => {
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()
  const { publicExercises } = usePublicExercises()

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
          <h1 className={css.main_title}>Ejercicios públicos</h1>
          <section className={css.gallery_container}>
          {publicExercises.map(exercise => (
            <ExerciseCard
              key={exercise?.Id_ejercicio}
              img_url={exercise?.Imagen}
              name={exercise?.Nombre_ejercicio}
              difficulty={exercise?.Dificultad}
              category={exercise?.Categoria}
              muscle={exercise?.Musculo}
              description={exercise?.Descripcion}
            />
          ))}
          </section>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default PublicExercises
