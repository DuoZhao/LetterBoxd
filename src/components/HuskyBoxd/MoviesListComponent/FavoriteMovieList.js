import MoviesList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieIDList} from "../actions/movie-action";
import {useProfile} from "../contexts/profile-context";


const FavoriteComponent = () => {
    const dispatch = useDispatch();
    let {profile} = useProfile();

    let movies = useSelector(state => state.movie);
    useEffect(() => {
        findMovieIDList(dispatch, profile.favorite_movie);
    }, []);

    function isPromise(p) {
        return typeof p === 'object' && typeof p.then === 'function';
    }

    for (let i = 0; i < movies.length; i++) {
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

export default FavoriteComponent