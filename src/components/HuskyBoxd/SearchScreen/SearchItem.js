import React from "react";
import {useNavigate} from "react-router-dom";
import {findMovieByID} from "../actions/movie-detail-action";
import {useDispatch} from "react-redux";

const SearchItem = ({movie}) => {
    const navigate = useNavigate()
    const toDetails = () => {
        navigate("/huskyboxd/detail/" + movie.imdbID)
    }

    const dispatch = useDispatch()

    //const Movie = findMovieByID(dispatch, movie.imdbID, false)


    // console.log(movie)
    // // console.log(Movie)
    // const movieInfo = Movie[0]

    return (
        <div className="list-group-item">

            <div className="container" style={{
                "border-style": "solid",
                "border-width": "thin",
                "border-color": "white",
                "border-left": "none",
                "border-right": "none",
                "border-bottom": "none"
            }}>
                <div className="row">
                    <div className="col-2">
                        <div onClick={toDetails}>
                            <img src={movie.Poster} height="150px" width="100%" alt={''}/>
                        </div>
                    </div>
                    <div className="col-10">
                        <text style={{
                            "padding-right": "20px",
                            "font-size": "20px",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}><strong>{movie.Title}</strong></text>
                        <br/> <br/>
                        <text style={{
                            "padding-right": "20px",
                            "font-size": "20px",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}><strong>{movie.Year}</strong></text>
                        <br/> <br/>
                        <text style={{
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}>Type: {movie.Type}</text>
                        {/*<text>Directed by: <strong>{movie.director}</strong></text>*/}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default SearchItem;
