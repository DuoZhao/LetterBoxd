import React from "react";
import "../Styles/card.css";

const PosterComponents = (
    {
        movie = {
            "_id": "123",
            "poster": "../pictures/images/poster/batman.jpg",
            "watch": 123456,
            "like": 123456
        }
    }) => {

    // const goToMovieDetails = async () => {
    //     navigate(`/huskyboxd/search/${id}`)
    // }
    return (
        <div className="list-group-item p-0 m-0" style={{width: "154px", height: "229px"}}>
            <div className="wd-film me-1">
                <a href="/"><img src={movie.poster} className="wd-img" alt="movie name"/></a>
                <div className="wd-cover-img">
                    <i className="fas fa-eye"/>
                    <text>{movie.watch}</text>
                    <i className="fas fa-heart"/>
                    <text>{movie.like} </text>
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