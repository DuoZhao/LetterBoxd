import axios from 'axios';

const MOVIE_API_URL = "http://localhost:4000/api/movies";
const MOVIE_UPDATE_API_URL = "http://localhost:4000/api/movies/update";
const MOVIE_RANDOM_API_URL = "http://localhost:4000/api/movies/random/7";

export const createMovie = async (movie) => {
    const response = await axios.post(MOVIE_API_URL, movie);
    return response.data;
}

export const findAllMovies =  async () => {
    const response = await axios.get(MOVIE_API_URL);
    const movies = response.data;
    return movies;
}

export const findMovieByimdbID = async (imdbID) => {
    const response = await axios.get(`${MOVIE_API_URL}/${imdbID}`)
    if (!response) {
        return null;
    }
    return response.data;
}

export const updateMovieComment = async (imdbID, comment) => {
    const response = await axios.put(`${MOVIE_UPDATE_API_URL}/${imdbID}`, comment)
    return response.data;
}

export const getRandomMovies = async () => {
    const response = await axios.get(MOVIE_RANDOM_API_URL);
    const movies = response.data;
    return movies;
}


