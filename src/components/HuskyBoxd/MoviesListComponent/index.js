import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getRandomMovies} from "../actions/movie-action";
import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";
import movie from "../data/myMovie.json";


const MoviesList = () => {
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    useEffect(() => getRandomMovies(dispatch), []);
    return (
        <div className="ms-4">

            <div className="wd-divider">
                NEW MOVIE THIS WEEK
            </div>
            <div className="wd-films-list justify-content-start mt-2">
                <>
                    {
                        movie.map(m => {
                            return (<PosterComponents key={m._id} movie={m}/>);
                        })
                    }
                </>

            </div>
        </div>
    );
}
export default MoviesList;