import ContentBox from "../../components/App/ContentBox/ContentBox"
import Footer from "../../components/App/Footer/Footer"
import Header from "../../components/site/Header/Header"
import Main from "../../components/App/Main/Main"
import Sidebar from "../../components/App/Sidebar/Sidebar"
import { useContext, useEffect, useState } from "react"
import { WhoContext } from "../../Routes"
import { useNavigate } from "react-router-dom"
import { ROLES } from "../../data/data"
import { usePublicExercises } from "../../hooks/usePublicExercises"
import ExerciseCard from "../../components/App/ExerciseCard/ExerciseCard"
import css from './PublicExercises.module.css'
import AVL from "../../services/Data Structures/AVL"

const PublicExercises = () => {
  const { who } = useContext(WhoContext)
  const navigate = useNavigate()
  const { publicExercises } = usePublicExercises(null)
  const [freqs, setFreqs] = useState([])

  useEffect(() => {
    if (who.role !== undefined && who.role === ROLES.GENERAL) {
      navigate('/')
    }
  }, [who.role])

  // Init Difficulty freqs
  useEffect(() => {
    if (!(publicExercises === undefined || publicExercises === null || publicExercises?.length === 0)) {
      const avl = new AVL()

      publicExercises.map(exercise => {
        avl.insert(exercise.Dificultad)
        avl.increase(exercise.Dificultad)
      })
      const avl_freqs = avl.get_freqs()
      avl_freqs.sort((a, b) => a.fkey - b.fkey)

      setFreqs(avl_freqs)
    }
  }, [publicExercises])

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>Ejercicios públicos</h1>
          
          <hr />

          <h2 className={css.subtitle}>Cantidad de ejercicios por dificultad</h2>
          <section className={css.tags_container}>
            {freqs?.map((e, index) => (
              <div className={css.tag_item} key={index}>
                <span>Dificultad de {e.fkey} : {e.ffreq} ejercicios</span>
              </div>
            ))}
          </section>
          
          <hr />

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
