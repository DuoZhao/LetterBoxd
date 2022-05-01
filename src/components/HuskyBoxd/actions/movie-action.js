import * as service from '../services/movie-services'

export const CREATE_MOVIE = 'CREATE_MOVIE';
export const FIND_ALL_MOVIES = 'FIND_ALL_MOVIES';
export const FIND_MOVIE_BY_IMDBID = 'FIND_MOVIE_BY_IMDBID';
export const GET_RANDOM_MOVIES = 'GET_RANDOM_MOVIES';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const FIND_MOVIE_LIST = 'FIND_MOVIE_LIST';


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

export const getRandomMovies = async (dispatch) => {
    console.log("called getRandom");
    const movies = await service.getRandomMovies();
    dispatch({
        type: GET_RANDOM_MOVIES,
        movies
    });
}

export const updateMovieComment = async (dispatch, imdbID, comment) => {
    const movie = await service.updateMovieComment(imdbID, comment);
    dispatch({
        type: UPDATE_COMMENT,
        comment: comment
    });
}

export const findMovieIDList = async (dispatch, movieList) => {
    const movies = service.findMovieIDList(movieList);
    dispatch({
        type: FIND_MOVIE_LIST,
        movies: movies
    });
}