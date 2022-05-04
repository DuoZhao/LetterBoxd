import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {findMovieIDList} from "../actions/movie-action";


const MoviesList = ({movie}) => {




    return (
        <div className="ms-4">


            <div className="wd-films-list justify-content-start mt-2">
                <>
                    {
                        movie && movie.map && movie.map(m => {
                            return (<PosterComponents key={m._id} movie={m}/>);
                        })
                    }
                </>

            </div>
        </div>
    );
}
export default MoviesList;