import {provider} from 'react-redux'
import React, {useEffect, useState} from "react";
import FilmsItem from "./FilmItem";
import {useDispatch, useSelector}
    from "react-redux";
import {Link} from "react-router-dom";
import "./index.css"
import "../Styles/card.css"

const FilmList = ({prof={
    "firstName": "Zhengyan", "lastName": "Mr.", "profilePicture":"../pictures/peaky_blinder.jpg",
}}) => {
    const FilmsReducer
        = useSelector(state => state.FilmsReducer);
    const dispatch = useDispatch();



    return (
            <div className="container">
                <br/>
                <div>
                    <Link to="/huskyboxd/profile" style={{"text-decoration":"none", "color":"black"}}>
                        <button type="button" style={{"width":"150px", "background-color":"grey", "font-size":"15px", "border-radius":"30%"}}>
                            Back
                        </button>
                    </Link>
                </div>
                <br/>

                <div className="container" style={{"border-style":"solid", "border-left":"none", "border-right":"none", "border-top":"none"}}>
                    <div className="row">
                        <div className="col-3">
                            <text style={{"padding-left":"10%"}}>
                                <img src={prof.profilePicture}  height="50px" width="50px" style={{"border-radius":"50%"}}/> {prof.lastName} {prof.firstName}'s movies
                            </text>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-3">
                                    <text style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                                        DECADE
                                    </text>
                                    <br/>
                                    <select id="select-one-genre" style={{"background-color":"grey"}}>
                                        <option value="2020S">2020S</option>
                                        <option value="2010S">2010S</option>
                                        <option selected value="2000S">2000S</option>
                                        <option value="1990S">1990S</option>
                                        <option value="1980S">1980S</option>
                                        <option value="1970S">1970S</option>
                                    </select>

                                </div>
                                <div className="col-3">
                                    <text style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                                        GENRE
                                    </text>
                                    <br/>
                                    <select id="select-one-genre" style={{"background-color":"grey"}}>
                                        <option value="All">All</option>
                                        <option value="Action">Action</option>
                                        <option selected value="Adventure">Adventure</option>
                                        <option value="Animation">Animation</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Crime">Crime</option>
                                        <option value="Documentary">Documentary</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Family">Family</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="History">History</option>
                                        <option value="Horror">Horror</option>
                                        <option value="History">History</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Horror">Music</option>
                                        <option value="History">Mystery</option>
                                        <option value="Horror">Romance</option>

                                    </select>
                                </div>
                                <div className="col-3">
                                    <text style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                                        SERVICE
                                    </text>
                                    <br/>
                                    <select id="select-one-genre" style={{"background-color":"grey"}}>
                                        <option value="All Films">All Films</option>
                                        <option value="Fandango US">Fandango US</option>
                                        <option selected value="Amazon US">Amazon US</option>
                                        <option value="Amazon Video US">Amazon Video US</option>
                                        <option value="iTunes US">iTunes US</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <text style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                                        SORT BY
                                    </text>
                                    <br/>
                                    <select id="select-one-genre" style={{"background-color":"grey"}}>
                                        <option value="Release Date">Release Date</option>
                                        <option value="Average Rating">Average Rating</option>
                                        <option selected value="Film Length">Film Length</option>
                                        <option value="Film Popularity">Film Popularity</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br/>
                </div>

                <ul className="ttr-tuits list-group wd-profilefilms-list">
                    {

                        FilmsReducer.map && FilmsReducer.map(prof =>
                            <>
                                <FilmsItem key={prof._id}
                                          prof={prof}/>
                                <br/>
                            </>)
                    }
                </ul>

                <br/><br/>

            </div>



    );
}

export default FilmList;