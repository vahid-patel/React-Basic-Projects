import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movie = [
    { id: 1, title: "Kick", release_date: "2014" },
    { id: 2, title: "Bahubali", release_date: "2016" },
    { id: 3, title: "dangal", release_date: "2016" },
    { id: 4, title: "jawan", release_date: "2024" },
  ];
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
