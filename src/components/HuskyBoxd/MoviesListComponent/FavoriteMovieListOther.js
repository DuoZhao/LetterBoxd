import MoviesList from "./index";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieIDList} from "../actions/movie-action";
import {useParams} from "react-router-dom";
import {findUserByID} from "../actions/user-actions";


const FavoriteComponentOther = () => {
    const dispatch = useDispatch();
    const {userId} = useParams()
    let movies = useSelector(state => state.movie);
    const called = async () => {
        const userInfo = await findUserByID(dispatch, userId);
        await findMovieIDList(dispatch, userInfo.favorite_movie)
    }
    useEffect(() => {
        called()
    }, []);
    function isPromise(p) {
        if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
        }
        return false;
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

export default FavoriteComponentOther