import MoviesList from "./index";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieIDList} from "../actions/movie-action";
import {useDispatch} from "react-redux";
import {useProfile} from "../contexts/profile-context";


const HistoryComponent =() => {

    const dispatch = useDispatch();
    let {profile} = useProfile();

    let movies = useSelector(state => state.movie);
    console.log("history");
    console.log(movies);
    useEffect(() => { findMovieIDList(dispatch, profile.history_movie);},[]);
    console.log("history");
    console.log(movies);

    function isPromise(p) {
        if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
        }
        return false;
    }

    for (let i = 0 ; i < movies.length; i++) {
        if (isPromise(movies[i])) {
            movies.pop(movies[i]);
        }
    }



    return (
        <>
            <MoviesList movie={movies}/>
        </>
    )

}

export default HistoryComponent