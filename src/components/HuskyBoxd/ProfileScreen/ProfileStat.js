import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {findUserByID} from "../actions/user-actions";
import {useDispatch, useSelector} from "react-redux";



const ProfileStat = () => {
    const prof = useSelector((state) => state.profileReducer);
    const {userId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => findUserByID(dispatch, userId, true), []);
    return (
        <div>
            <br/>
            <div style={{"padding-left": "20px"}}>
                <Link to="/huskyboxd/profile" style={{"text-decoration": "none", "color": "black"}}>
                    <button type="button" style={{
                        "width": "150px",
                        "background-color": "grey",
                        "font-size": "15px",
                        "border-radius": "30%"
                    }}>
                        Back
                    </button>
                </Link>
            </div>



            <div style={{"height": "400px", "position": "relative"}}>
                <img src="../pictures/stat_background.jpg" height="450px" width="100%" style={{"position": "absolute"}}/>
                <text style={{
                    "position": "absolute",
                    "padding-top": "150px",
                    "padding-left": "35%",
                    "font-size": "70px"
                }}>
                    <strong>A Life in Film</strong>
                </text>
                <text style={{
                    "position": "absolute",
                    "padding-top": "250px",
                    "padding-left": "34%",
                    "font-size": "30px"
                }}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s all time stat
                </text>
            </div>

            <br/> <br/>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src="../pictures/stat_bar.webp" height="350px" width="100%"/>
            </div>

            <br/><br/><br/>

            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2021 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src="../pictures/stat_background2.jpg" height="350px" width="100%"/>
            </div>

            <br/><br/><br/>

            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2020 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src="../pictures/stat_background3.jpg" height="350px" width="100%"/>
            </div>

            <br/><br/><br/>


            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2019 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            0
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <br/><br/><br/>


        </div>


    );
}

export default ProfileStat;
