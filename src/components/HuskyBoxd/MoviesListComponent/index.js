import "./index.css"
import "../Styles/card.css"
import PosterComponents from "./PosterComponents";


const MoviesList = ({movie}) => {
    return (
        <div className="ms-4">

            <div className="wd-divider">
                NEW MOVIE THIS WEEK
            </div>
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