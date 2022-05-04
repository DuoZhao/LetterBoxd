import MoviesList from "./index";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieIDList} from "../actions/movie-action";
import {useDispatch} from "react-redux";
import {useProfile} from "../contexts/profile-context";


const FavoriteComponent =() => {

    const dispatch = useDispatch();
    let {profile} = useProfile();

    let movies = useSelector(state => state.movie);
    console.log("favorite");
    console.log(movies);
    useEffect(() => { findMovieIDList(dispatch, profile.favorite_movie);},[]);
    console.log("favorite");
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

    // while (movies.length>4){
    //     movies.pop();
    //     movies.reverse();
    //     console.log(movies.length);
    // }
    // console.log(movies)



    return (
        <>
        <MoviesList movie={movies}/>
        </>
    )

}

export default FavoriteComponent