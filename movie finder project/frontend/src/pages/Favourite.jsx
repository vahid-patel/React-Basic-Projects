import MovieCard from "../components/MovieCard"

function Home () {
    const movie = [
        {id : 1, title : "Kick", release_date : "2014"},
        {id : 2, title : "Bahubali", release_date : "2016"},
        {id : 3, title : "dangal", release_date : "2016"},
        {id : 4, title : "jawan", release_date : "2024"},
    ]
    return (
        <div className="home">
            <form onSubmit={handleSearch}></form>
            <div className="movies-grid">
                {movie.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>)
}

export default Home;