import axios from 'axios';

const MOVIE_API_URL = "http://localhost:4000/api/movies";

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

