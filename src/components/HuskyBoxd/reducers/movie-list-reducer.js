import {FIND_MOVIE_LIST} from "../actions/movie-action";

const movieListReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_MOVIE_LIST:
            return action.movies;
        default:
            return {};
    }
};

export default movieListReducer;