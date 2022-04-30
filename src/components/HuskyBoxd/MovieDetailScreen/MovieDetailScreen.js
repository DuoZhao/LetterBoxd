import React, {useEffect} from "react";
import MovieDetailComponent from "./MovieDetailComponent";
import {findMovieByID} from "../actions/movie-detail-action.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Comments from "../CommentComponent";
// import CreateComment from "../CommentComponent/CreateCommentComponent";

const MovieDetailScreen = () => {
    const {movieId} = useParams();
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    useEffect(() => findMovieByID(dispatch, movieId, true), []);

    return(
        <>
            <MovieDetailComponent movie={movie}/>
            <div className="container row">
                {/*<CreateComment/>*/}
                <Comments/>
            </div>
        </>
    );
};
export default MovieDetailScreen;