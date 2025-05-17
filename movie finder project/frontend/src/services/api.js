const API_KEY = "6e448839513efd69399ac083dd361e9f"
const BASE_URL = "https://api.themoviedb.org/3/"

export const getPopularMovies = async  () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results;
}