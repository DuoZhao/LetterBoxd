import {Outlet} from "react-router-dom";
import profileReducer from "./reducers/user-reducer";
import SearchReducer from "./reducers/search-reducer";
import movieReducer from "./reducers/movie-reducer";
import StatReducer from "./reducers/stat-reducer";
import FilmsReducer from "./reducers/films-reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import movieListReducer from "./reducers/movie-list-reducer";

const reducers = combineReducers({SearchReducer, profileReducer, StatReducer, FilmsReducer, movie: movieReducer, movieList: movieListReducer})
// movie: movieReducer
const store = createStore(reducers);

const Movie = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
};
export default Movie;