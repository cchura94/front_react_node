
import { NavLink } from 'react-router-dom'
import './App.css'
import Routes from './routes'

function App() {

  return (
    <>
      <NavLink to="/login">INGRESAR</NavLink> |
      <NavLink to="/registro">REGISTRO</NavLink>
      
      <Routes></Routes>
    </>
  )
}

export default App
