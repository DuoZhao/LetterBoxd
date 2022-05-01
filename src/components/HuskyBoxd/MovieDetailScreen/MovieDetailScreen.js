import React, {useEffect} from "react";
import MovieDetailComponent from "./MovieDetailComponent";
import {findMovieByID} from "../actions/movie-detail-action.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Comments from "../CommentComponent";
// import CreateComment from "../CommentComponent/CreateCommentComponent";
import CreateComment from "../CommentComponent/CreateCommentComponent";

const MovieDetailScreen = () => {
    const {movieId} = useParams();
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    useEffect(() => findMovieByID(dispatch, movieId, true), []);
    return(
        <>
            <MovieDetailComponent movie={movie}/>
            <div className="container row justify-content-center">
                <CreateComment movie={movie}/>
            </div>
            <div className="container row">
                <Comments movie={movie}/>
            </div>
        </>
    );
};
export default MovieDetailScreen;