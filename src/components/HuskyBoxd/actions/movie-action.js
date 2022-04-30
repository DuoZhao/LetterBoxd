import * as service from '../services/movie-services'


export const CREATE_MOVIE = 'CREATE_MOVIE';
export const FIND_ALL_MOVIES = 'FIND_ALL_MOVIES';
export const FIND_MOVIE_BY_IMDBID = 'FIND_MOVIE_BY_IMDBID';


export const createMovie = async (dispatch, movie) => {
    const newMovie = await service.createMovie(movie);
    dispatch({
        type: CREATE_MOVIE,
        newMovie
    });
}

export const findAllMovies = async (dispatch) => {
    const movies = await service.findAllMovies();
    dispatch({
        type: FIND_ALL_MOVIES,
        movies
    });
}

export const findMovieByimdbID = async (dispatch, movie) => {
    const movies = await service.findMovieByimdbID(movie);

    dispatch({
        type: FIND_MOVIE_BY_IMDBID,
        movies
    });
}