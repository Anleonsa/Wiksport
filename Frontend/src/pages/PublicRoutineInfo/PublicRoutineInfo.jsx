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
import { useRoutineInfo } from "../../hooks/userRoutineInfo"

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

  console.log(routineInfo)

  return (
    <>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>
          <h1 className={css.main_title}>Título de la rutina</h1>
          <section className={css.affaslkj}>
          
          </section>
        </Main>
      </ContentBox>
      <Footer></Footer>
    </>
  )
}
export default PublicRoutineInfo
