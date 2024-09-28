import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Panel from './pages/Panel/Panel'
import Calendar from './pages/Calendar/Calendar'
import PublicExercises from './pages/PublicExercises/PublicExercises'

import CreateRoutine from './pages/CreateRoutine'
import Profile from './pages/Profile/Profile'
import Page404 from './pages/Page404'
import COMP_AVL from './pages/AVL'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useWho } from './hooks/useWho'
import { createContext } from 'react'
import PublicRoutineInfo from './pages/PublicRoutineInfo/PublicRoutineInfo'
import PublicRoutines from './pages/PublicRoutines/PublicRoutines'
import MyRoutines from './pages/MyRoutines/MyRoutines'
import MyRoutineInfo from './pages/MyRoutineInfo/MyRoutineInfo'
import RunRoutine from './pages/RunRoutine/RunRoutine'

export const WhoContext = createContext()

const AppRoutes = () => {
  const { who } = useWho()
  return (
    <WhoContext.Provider value={{ who }}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/panel' exact element={<Panel />} />
          <Route path='/iniciar-sesion' exact element={<Login />} />
          <Route path='/registrarse' exact element={<Register />} />
          <Route path='/calendario' exact element={<Calendar />} />
          <Route path='/ejercicios' exact element={<PublicExercises />} />
          <Route path='/rutinas' exact element={<PublicRoutines />} />
          <Route path='/rutina/:id' exact element={<PublicRoutineInfo />}></Route>
          <Route path='/mis-rutinas' exact element={<MyRoutines />}></Route>
          <Route path='/mi-rutina/:id' exact element={<MyRoutineInfo />}></Route>
          <Route path='/hacer-rutina/:mode/:id' exact element={<RunRoutine />}></Route>
          <Route path='/crear-rutina' exact elemnt={<CreateRoutine />} />
          <Route path='/perfil' exact element={<Profile />} />
          <Route path='/avl' element={<COMP_AVL />}></Route>
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Router>
    </WhoContext.Provider>
  )
}
export default AppRoutes
