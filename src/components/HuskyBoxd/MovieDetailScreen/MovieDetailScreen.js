import React, {useEffect} from "react";
import MovieDetailComponent from "./MovieDetailComponent";
import {findMovieByID} from "../actions/movie-detail-action.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Comments from "../CommentComponent";

const MovieDetailScreen = () => {
    const {movieId} = useParams();
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    useEffect(() => findMovieByID(dispatch, movieId, true), []);

    return(
        <>
            <MovieDetailComponent movie={movie}/>
        </>
    );
};
export default MovieDetailScreen;