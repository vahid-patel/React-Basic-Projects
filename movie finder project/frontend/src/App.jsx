import MovieCard from './components/MovieCard'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Favourite from './pages/Favourite'

function App() {

  return (
    <div>
      <NavBar></NavBar>
    <main className='main-Content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
      </Routes>
    </main>
    </div>
  )
}



export default App
