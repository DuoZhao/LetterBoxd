import movie from '../data/movie.json';
import {FIND_MOVIE_BY_ID, FIND_MOVIE_IMG_BY_ID} from "../actions/movie-detail-action";

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_MOVIE_BY_ID:
            return action.movieInfo
        case FIND_MOVIE_IMG_BY_ID:
            return action.movieImg
        default:
            return movie
    }
};

export default movieReducer;