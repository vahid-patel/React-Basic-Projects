import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  const movienumber = 1;

  return (
    <>
    {movienumber === 1 ? (     
       <MovieCard movie={{title:"Krish 4",release_date:"2025"}}/>
):(      
<MovieCard movie={{title:"War 2",release_date:"2025"}}/>
)}
    </>
  )
}



export default App
