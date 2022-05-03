import React from "react";
import "../Styles/card.css";
import {useNavigate} from "react-router-dom";
// import default_img from "../pictures/no_image.jpg"

const PosterComponents = ({movie}) => {
    const navigate = useNavigate();
    const goToMovieDetails = (movieID) => {
        navigate("/huskyboxd/detail/" + movieID)
    }
    return (
        <div className="list-group-item p-0 m-0" style={{width: "154px", height: "229px"}}>
            <div className="wd-film me-1">
                <a href="#">
                    <img src={movie.Poster} className="wd-img" alt={movie.Title} onClick={() => goToMovieDetails(movie.imdbID)}/>
                    {/*<img src={default_img} className="wd-img"/>*/}
                </a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/>
                    <text>123, 456</text>
                    <i className="fas fa-heart"/>
                    <text>123, 456</text>
                </div>
            </div>

            {/*<div className="wd-film me-1">*/}
            {/*    <a href="/"><img src ="../pictures/images/poster/batman.jpg" className="wd-img" alt="movie name"/></a>*/}
            {/*    <div className="wd-cover-img">*/}
            {/*        <i className="fas fa-eye"/> <p>123,123 </p>*/}
            {/*        <i className="fas fa-heart"/> <p>123,123 </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="wd-film me-1">*/}
            {/*    <a href="/"><img src ="../pictures/images/poster/batman.jpg" className="wd-img" alt="movie name"/></a>*/}
            {/*    <div className="wd-cover-img">*/}
            {/*        <i className="fas fa-eye"/> <p>123,123 </p>*/}
            {/*        <i className="fas fa-heart"/> <p>123,123 </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="wd-film me-1">*/}
            {/*    <a href="/"><img src ="../pictures/images/poster/batman.jpg" className="wd-img" alt="movie name"/></a>*/}
            {/*    <div className="wd-cover-img">*/}
            {/*        <i className="fas fa-eye"/> <p>123,123 </p>*/}
            {/*        <i className="fas fa-heart"/> <p>123,123 </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="wd-film me-1">*/}
            {/*    <a href="/"><img src ="../pictures/images/poster/batman.jpg" className="wd-img" alt="movie name"/></a>*/}
            {/*    <div className="wd-cover-img">*/}
            {/*        <i className="fas fa-eye"/> <p>123,123 </p>*/}
            {/*        <i className="fas fa-heart"/> <p>123,123 </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="wd-film me-1">*/}
            {/*    <a href="/"><img src ="../pictures/images/poster/batman.jpg" className="wd-img" alt="movie name"/></a>*/}
            {/*    <div className="wd-cover-img">*/}
            {/*        <i className="fas fa-eye"/> <p>123,123 </p>*/}
            {/*        <i className="fas fa-heart"/> <p>123,123 </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}
export default PosterComponents;