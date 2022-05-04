import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../Styles/card.css";
import {useDispatch} from "react-redux";
import {useProfile} from "../contexts/profile-context";
import {findUserByID} from "../actions/user-actions";
import Navigation from "../Navigation";
import {findMovieIDList, findMovieByimdbID} from "../actions/movie-action";
import FavoriteComponent from "../MoviesListComponent/FavoriteMovieList";
import HistoryComponent from "../MoviesListComponent/HistoryMovieList";
import {useSelector} from "react-redux";



const ProfListItem = () => {
    const [finalProfile, setFinalProfile] = useState();
    const navigate = useNavigate();
    const NavigateToEditProfile = async () => {
        navigate(`/huskyboxd/editprofile`);
    }
    let {profile} = useProfile();
    const redirectLogin = () => {
        if (profile) {
            setFinalProfile(profile);
        } else {
            navigate(`/huskyboxd/login`);
        }
    }
    useEffect(() => {
        redirectLogin();
    }, []);


    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            {/*navigation*/}
            <Navigation login={true}/>

            <div className="container">

                {/*<div style={{"height": "400px"}}>*/}
                <div>
                    {finalProfile && finalProfile.bannerPicture && < img src={finalProfile.bannerPicture}
                                                                         style={{objectFit: 'cover'}} height="550px" width="100%"/>}
                    {finalProfile && !finalProfile.bannerPicture && < img src="../pictures/default.png"
                                                                          style={{objectFit: 'cover'}} height="550px" width="100%"/>}
                </div>
                <div className="row">
                    <div className="col ms-2 position-relative">
                        {profile.profilePicture && <img src={profile.profilePicture} className="rounded-circle"
                                                        style={{"border-radius": "50%", "float": "left"}}/>}

                        {!profile.profilePicture && <img src="../pictures/images/avatar/3.jpg"
                                                         className="rounded-circle position-relative"
                                                         height="100px" width="100px"
                                                         style={
                                                            {
                                                                border : '#060606 solid 5px',
                                                                marginTop: "-55px",
                                                                marginLeft: "100px"
                                                            }}/>}
                        <span className="wd-movie-name">
                            {finalProfile && finalProfile.username}
                        </span>
                        {/*<div className="wd-movie-name" style={{marginLeft: "100px"}}>*/}
                        {/*    {finalProfile && finalProfile.username}*/}
                        {/*</div>*/}
                    </div>

                    <div className="col">
                            <button onClick={() => NavigateToEditProfile()}
                                    className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white">
                                <b>Edit Profile</b>
                            </button>
                    </div>

                    {/*{userId ? `` :*/}
                    {/*    <div style={{"padding-left": "70px"}}>*/}
                    {/*        <button onClick={() => NavigateToEditProfile()}*/}
                    {/*                style={{"color": "grey", "font-size": "15px"}}>*/}
                    {/*            Edit Profile*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*}*/}
                </div>

                {/*avatar*/}
                <div style={{"padding-top": "50px", "padding-left": "100px", "position": "relative"}}>
                <div className="row">
                    {/*<div className="col-1">*/}
                    {/*    /!*<img src={finalProfile && finalProfile.profilePicture} height="100px" width="100px"*!/*/}
                    {/*    /!*     style={{"border-radius": "50%", "float": "left"}}/>*!/*/}
                    {/*    /!*<img src={!finalProfile && "../pictures/ready-player-one.jpg.jpg"} height="100px" width="100px"*!/*/}
                    {/*    /!*     style={{"border-radius": "50%", "float": "left"}}/>*!/*/}
                    {/*    {profile.profilePicture && <img src={profile.profilePicture} height="100px" width="100px"*/}
                    {/*                                         style={{"border-radius": "50%", "float": "left"}}/>}*/}
                    {/*    {!profile.profilePicture && <img src="../pictures/default_avatar.jpg" height="100px" width="100px"*/}
                    {/*                                          style={{"border-radius": "50%", "float": "left"}}/>}*/}
                    {/*</div>*/}
                    {/*<div className="col-2">*/}
                    {/*    <span style={{"height": "50px", "padding-left": "40px"}}>*/}
                    {/*       <text style={{*/}
                    {/*           "color": "white",*/}
                    {/*           "font-size": "30px"*/}
                    {/*       }}><strong>{finalProfile && finalProfile.username}</strong></text>*/}
                    {/*       <br/>*/}
                    {/*        {userId ? `` :*/}
                    {/*            <div style={{"padding-left": "70px"}}>*/}
                    {/*                <button onClick={() => NavigateToEditProfile()}*/}
                    {/*                        style={{"color": "grey", "font-size": "15px"}}>*/}
                    {/*                    Edit Profile*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        }*/}

                    {/*    </span>*/}
                    {/*</div>*/}
                </div>


                {/*<div className="row" style={{"width": "90%", "padding-left": "450px"}}>*/}

                {/*    <div className="col-1 col-lg-1 col-xl-2" style={{*/}
                {/*        "color": "white",*/}
                {/*        "padding-left": "10px",*/}
                {/*        "padding-rightt": "10px",*/}
                {/*        "border-style": "dotted",*/}
                {/*        "border-color": "grey",*/}
                {/*        "border-top": "none",*/}
                {/*        "border-left": "none",*/}
                {/*        "border-bottom": "none"*/}
                {/*    }}>*/}
                {/*        <strong style={{"color": "white"}}>{finalProfile && finalProfile.films}</strong>*/}
                {/*        <br/>*/}
                {/*        <Link to="/huskyboxd/profile-films" style={{*/}
                {/*            "color": "white",*/}
                {/*            "background-color": "black",*/}
                {/*            "text-decoration": "none",*/}
                {/*            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                {/*        }}>FILMS</Link>*/}
                {/*    </div>*/}
                {/*    <div className="col-1 col-lg-1 col-xl-2" style={{*/}
                {/*        "color": "white",*/}
                {/*        "padding-left": "10px",*/}
                {/*        "padding-rightt": "10px",*/}
                {/*        "border-style": "dotted",*/}
                {/*        "border-color": "grey",*/}
                {/*        "border-top": "none",*/}
                {/*        "border-left": "none",*/}
                {/*        "border-bottom": "none"*/}
                {/*    }}>*/}
                {/*        <strong style={{"color": "white"}}>{finalProfile && finalProfile.thisyear}</strong>*/}
                {/*        <br/>*/}
                {/*        <Link to="/movie/profile" style={{*/}
                {/*            "color": "white",*/}
                {/*            "background-color": "black",*/}
                {/*            "text-decoration": "none",*/}
                {/*            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                {/*        }}>THIS YEAR</Link>*/}
                {/*    </div>*/}
                {/*    <div className="col-1 col-lg-1 col-xl-2" style={{*/}
                {/*        "color": "white",*/}
                {/*        "padding-left": "10px",*/}
                {/*        "padding-rightt": "10px",*/}
                {/*        "border-style": "dotted",*/}
                {/*        "border-color": "grey",*/}
                {/*        "border-top": "none",*/}
                {/*        "border-left": "none",*/}
                {/*        "border-bottom": "none"*/}
                {/*    }}>*/}
                {/*        <strong style={{"color": "white"}}>{finalProfile && finalProfile.lists}</strong>*/}
                {/*        <br/>*/}
                {/*        <Link to="/movie/profile" style={{*/}
                {/*            "color": "white",*/}
                {/*            "background-color": "black",*/}
                {/*            "text-decoration": "none",*/}
                {/*            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                {/*        }}>LISTS</Link>*/}
                {/*    </div>*/}
                {/*    <div className="col-1 col-lg-1 col-xl-2" style={{*/}
                {/*        "color": "white",*/}
                {/*        "padding-left": "10px",*/}
                {/*        "padding-rightt": "10px",*/}
                {/*        "border-style": "dotted",*/}
                {/*        "border-color": "grey",*/}
                {/*        "border-top": "none",*/}
                {/*        "border-left": "none",*/}
                {/*        "border-bottom": "none"*/}
                {/*    }}>*/}
                {/*        <strong style={{"color": "white"}}>{finalProfile && finalProfile.followingCount}</strong>*/}
                {/*        <br/>*/}
                {/*        <Link to="/movie/profile" style={{*/}
                {/*            "color": "white",*/}
                {/*            "background-color": "black",*/}
                {/*            "text-decoration": "none",*/}
                {/*            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                {/*        }}>FOLLOWING</Link>*/}
                {/*    </div>*/}
                {/*    <div className="col-1 col-lg-1 col-xl-2"*/}
                {/*         style={{"color": "white", "padding-left": "10px", "padding-rightt": "10px"}}>*/}
                {/*        <strong style={{"color": "white"}}>{finalProfile && finalProfile.followersCount}</strong>*/}
                {/*        <br/>*/}
                {/*        <Link to="/movie/profile" style={{*/}
                {/*            "color": "white",*/}
                {/*            "background-color": "black",*/}
                {/*            "text-decoration": "none",*/}
                {/*            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"*/}
                {/*        }}>FOLLOWERS</Link>*/}
                {/*    </div>*/}


                {/*</div>*/}
            </div>

            <div className="container rounded-3"
                 style={{"border-style": "solid", "border-color": "grey", backgroundColor: "rgba(33,40,48,255)"}}>
                <div className="row">
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/profile" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Profile</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/profile-films" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Films</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/profile" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Likes</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/profile" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Tags</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/stat" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Stats</strong></Link>
                    </div>
                    <div className="col-2" style={{"padding-left": "10px", "padding-right": "60px"}}>
                        <Link to="/huskyboxd/profile" style={{
                            "color": "white",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif",
                            "font-size": "20px"
                        }}><strong>Network</strong></Link>
                    </div>
                </div>
            </div>



            <br/><br/><br/>

            <div className="container">
                <div className="wd-divider">
                    Favorite Movie
                </div>
                <br/>
                <FavoriteComponent/>
            </div>

            </div>

            <br/><br/>



            <br/> <br/> <br/>


        </div>

    );
}


export default ProfListItem;