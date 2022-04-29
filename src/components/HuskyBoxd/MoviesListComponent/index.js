import React from "react";
import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";
import movie from "../data/myMovie.json";

const MoviesList = () => {
    return (
        <div className="ms-4">

            <div className="wd-divider">
                NEW MOVIE THIS WEEK
            </div>
            <div className="wd-films-list justify-content-start mt-2">
                <>
                    {
                        movie.map(m => {
                            return (<PosterComponents key={m.id} movie={m}/>);
                        })
                    }
                </>

            </div>
        </div>
    );
}
export default MoviesList;