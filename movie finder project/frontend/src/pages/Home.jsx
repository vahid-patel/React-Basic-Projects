import { useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies,setMovies]= useState([])

  useEffect(()=>{},[])
  const handleSearch = (e) => {
      e.preventDefault()
      alert("clicked search")
      setSearchQuery("bye")
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movie.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) &&
          (<MovieCard movie={movie} key={movie.id}></MovieCard>)
        ))}
      </div>
    </div>
  );
}

export default Home;
