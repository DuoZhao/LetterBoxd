import {useNavigate} from "react-router-dom";
import React from "react";
import showStar from "./giveStar";
const SearchItem = ({movie}) => {
    const navigate = useNavigate()
    const toDetails = () => {
        navigate("/huskyboxd/detail/" + movie.imdbID)
    }
    const star = [<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(40,253,120)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>];
    let n = Math.floor(Math.random() * 3) + 1;
    let finalStar = star[n];
    // console.log("random number")
    // console.log(finalStar)
    // for (let i = 0; i < n; i++) {
    //     finalStar = finalStar + star;
    // }
    // console.log(finalStar)
    return (
        <div className="list-group-item">

            <div className="container" style={{}}>
                <div className="row">
                    <div className="col-1 p-0">

                        {/*<div className="wd-card" style={{width: "74px", height: "109px"}}*/}
                        {/*     onClick={() => NavigateToDetail(comment.imdbID)}>*/}
                        {/*    <img src={comment.Poster} alt=""/>*/}
                        {/*</div>*/}

                        <div onClick={toDetails}>
                            <div className="wd-card" style={{width: "74px", height: "109px"}}>
                                {movie.Poster && <img  src={movie.Poster} alt={''}/>}
                                {!movie.Poster && <img src="../../pictures/no_image.jpg" />}
                            </div>
                        </div>
                    </div>
                    <div className="col-10 p-0 ms-3">
                        <div className="row">
                            <div className="d-inline">
                                <span className="wd-movie-name">{movie.Title}</span>
                                <b className="ms-2 wd-movie-time">{movie.Year}</b>
                            </div>
                        </div>
                        <div className="row" style={{"display": "inline-block"}}>
                            <div className="d-inline">
                                {/*<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>*/}
                                {/*<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>*/}
                                {/*<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>*/}
                                {/*<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>*/}
                                {finalStar}
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-inline">
                                <b className="wd-movie-time" style={{fontSize: "15px"}}>Type: </b>
                                <b className="wd-movie-time"
                                   style={{fontSize: "15px", backgroundColor: "rgb(40, 48, 56)", borderBottomColor: "rgb(153, 170, 187)",
                                   borderBottomRightRadius: "5px"}}>
                                    {movie.Type}
                                </b>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-inline">
                                <b className="wd-movie-time" style={{fontSize: "15px"}}>imdbID: </b>
                                <b className="wd-movie-time"
                                   style={{fontSize: "15px", color: "white"}}>
                                    {movie.imdbID}
                                </b>
                            </div>
                        </div>
                        {/*/!*<text style={{*!/*/}
                        {/*/!*    "padding-right": "20px",*!/*/}
                        {/*/!*    "font-size": "20px",*!/*/}
                        {/*/!*    "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*!/*/}
                        {/*/!*}}><strong>{movie.Title}</strong></text>*!/*/}
                        {/*<br/> <br/>*/}
                        {/*<text style={{*/}
                        {/*    "padding-right": "20px",*/}
                        {/*    "font-size": "20px",*/}
                        {/*    "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                        {/*}}><strong>{movie.Year}</strong></text>*/}
                        {/*<br/> <br/>*/}
                        {/*<text style={{*/}
                        {/*    "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",*/}
                        {/*    "font-size": "20px"*/}
                        {/*}}>Type: {movie.Type}</text>*/}
                        {/*<text>Directed by: <strong>{movie.director}</strong></text>*/}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default SearchItem;
