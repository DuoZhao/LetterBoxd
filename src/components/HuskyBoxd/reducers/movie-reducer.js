import movie from '../data/movie.json';
import {FIND_MOVIE_BY_ID, FIND_MOVIE_IMG_BY_ID} from "../actions/movie-detail-action";
import {
    FIND_ALL_MOVIES,
    FIND_MOVIE_BY_IMDBID,
    CREATE_MOVIE,
    GET_RANDOM_MOVIES,
    UPDATE_COMMENT
} from "../actions/movie-action";

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_MOVIE_BY_ID:
            return action.movieInfo
        case FIND_MOVIE_IMG_BY_ID:
            return action.movieImg
        case CREATE_MOVIE:
            return [
                ...state,
                action.newMovie
            ];
        case FIND_MOVIE_BY_IMDBID:
            return state.filter(movie => movie.imdbID === action.movies.imdbID)
        case FIND_ALL_MOVIES:
            return action.movies;
        case GET_RANDOM_MOVIES:
            return action.movies;
        case UPDATE_COMMENT:
            state["history_comment"].push(action.comment)
            return state;
        default:
            return movie;
    }
};

export default movieReducer;