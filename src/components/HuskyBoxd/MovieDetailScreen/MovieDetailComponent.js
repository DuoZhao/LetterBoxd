import "./index.css";
import {useDispatch} from "react-redux";
import {useProfile} from "../contexts/profile-context";
import {updateFavoriteMovie} from "../actions/user-actions";
import {updateHistoryMovie} from "../actions/user-actions";

const MovieDetailComponent = ({movie}) => {
    const backgroundImage = `url(${movie.image})`;
    const dispatch = useDispatch();
    const {profile} = useProfile();
    return (
        <>
            <div className="wd-detail">
                <div className="wd-movie-background">
                    <div id="wd-detail-container"
                         style={{background: `linear-gradient(to right, transparent 90%,   black 100%), linear-gradient(to left, transparent 90%,  black 100%), linear-gradient(to bottom, transparent, black), linear-gradient(to right bottom, transparent 90%, black), linear-gradient(to left bottom, transparent 90%, black), ${backgroundImage} center center no-repeat `}}>
                    </div>
                </div>
                <div className="wd-movie-detail justify-content-center">
                    <div className="container row m-auto">
                        <div className="col-4">
                            <img className="float-end" src={movie.Poster}/>
                        </div>
                        <div className="col-7">
                            <section>
                                <h1>{movie.Title}</h1>
                                <h4 className="ms-3">{movie.Year}</h4>
                                <text className="ms-3">Directed by {movie.Director}</text>
                                <p>{movie.Plot}</p>

                                <div className="d-flex justify-content-start">
                                    <div className="flex-column ms-1"
                                         onClick={() =>updateHistoryMovie(dispatch, profile._id, movie._id)}>
                                        <div className="far fa-eye" style={{color: "rgb(0, 224, 84)"}}/>
                                    </div>
                                    <div className="flex-column ms-2"
                                         onClick={() =>updateFavoriteMovie(dispatch, profile._id, movie._id)}>
                                        <div className="far fa-heart" style={{color: "rgb(255, 128, 0)"}}/>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MovieDetailComponent;