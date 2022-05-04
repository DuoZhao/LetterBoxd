import React, {useEffect} from "react";
import MovieDetailComponent from "./MovieDetailComponent";
import {findMovieByID} from "../actions/movie-detail-action.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Comments from "../CommentComponent";
import CreateComment from "../CommentComponent/CreateCommentComponent";
import Navigation from "../Navigation";

const MovieDetailScreen = () => {
    const {movieId} = useParams();
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        findMovieByID(dispatch, movieId, true)
    });
    return(
        <>
            <Navigation login={true}/>
            <MovieDetailComponent movie={movie}/>

            <div className="container justify-content-center">
                <CreateComment movie={movie}/>
            </div>
            <div className="container justify-content-center">
                <Comments movie={movie}/>
            </div>
        </>
    );
};
export default MovieDetailScreen;