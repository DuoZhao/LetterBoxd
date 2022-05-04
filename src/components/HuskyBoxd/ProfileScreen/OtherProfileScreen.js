import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import "../Styles/card.css";
import {useDispatch, useSelector} from "react-redux";
import Navigation from "../Navigation";
import {findUserByID} from "../actions/user-actions";
import FavoriteComponentOther from "../MoviesListComponent/FavoriteMovieListOther";


const OtherProfileScreen = () => {

    const finalProfile = useSelector(state => state.profileReducer)
    const {userId} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        findUserByID(dispatch, userId);
    }, []);
    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            {/*navigation*/}
            <Navigation login={true}/>
            <div style={{"height": "400px"}}>
                {finalProfile && finalProfile.bannerPicture &&
                < img src={finalProfile.bannerPicture} height="550px" width="100%"/>}
                {finalProfile && !finalProfile.bannerPicture &&
                < img src="../../pictures/cyperpunk.jpg" height="550px" width="100%"/>}
            </div>

            {/*avatar*/}
            <div style={{"padding-top": "50px", "padding-left": "100px", "position": "relative"}}>
                <div className="row">
                    <div className="col-1">
                        {finalProfile && finalProfile.profilePicture &&
                        <img src={finalProfile && finalProfile.profilePicture} height="100px" width="100px"
                             style={{"border-radius": "50%", "float": "left"}}/>}
                        {finalProfile && !finalProfile.profilePicture &&
                        <img src="../../pictures/default_avatar.jpg" height="100px" width="100px"
                             style={{"border-radius": "50%", "float": "left"}}/>}
                    </div>
                    <div className="col-2">
                        <span style={{"height": "50px", "padding-left": "40px"}}>
                           <text style={{
                               "color": "white",
                               "font-size": "30px"
                           }}><strong>{finalProfile && finalProfile.username}</strong></text>
                           <br/>
                        </span>
                    </div>
                </div>
                <div className="row" style={{"width": "90%", "padding-left": "450px"}}>
                    <div className="col-1 col-lg-1 col-xl-2" style={{
                        "color": "white",
                        "padding-left": "10px",
                        "padding-rightt": "10px",
                        "border-style": "dotted",
                        "border-color": "grey",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "none"
                    }}>
                        <strong style={{"color": "white"}}>{finalProfile && finalProfile.films}</strong>
                        <br/>
                        <Link to="/huskyboxd/profile-films" style={{
                            "color": "white",
                            "background-color": "black",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}>FILMS</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{
                        "color": "white",
                        "padding-left": "10px",
                        "padding-rightt": "10px",
                        "border-style": "dotted",
                        "border-color": "grey",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "none"
                    }}>
                        <strong style={{"color": "white"}}>{finalProfile && finalProfile.thisyear}</strong>
                        <br/>
                        <Link to="/movie/profile" style={{
                            "color": "white",
                            "background-color": "black",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}>THIS YEAR</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{
                        "color": "white",
                        "padding-left": "10px",
                        "padding-rightt": "10px",
                        "border-style": "dotted",
                        "border-color": "grey",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "none"
                    }}>
                        <strong style={{"color": "white"}}>{finalProfile && finalProfile.lists}</strong>
                        <br/>
                        <Link to="/movie/profile" style={{
                            "color": "white",
                            "background-color": "black",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}>LISTS</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2" style={{
                        "color": "white",
                        "padding-left": "10px",
                        "padding-rightt": "10px",
                        "border-style": "dotted",
                        "border-color": "grey",
                        "border-top": "none",
                        "border-left": "none",
                        "border-bottom": "none"
                    }}>
                        <strong style={{"color": "white"}}>{finalProfile && finalProfile.followingCount}</strong>
                        <br/>
                        <Link to="/movie/profile" style={{
                            "color": "white",
                            "background-color": "black",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}>FOLLOWING</Link>
                    </div>
                    <div className="col-1 col-lg-1 col-xl-2"
                         style={{"color": "white", "padding-left": "10px", "padding-rightt": "10px"}}>
                        <strong style={{"color": "white"}}>{finalProfile && finalProfile.followersCount}</strong>
                        <br/>
                        <Link to="/movie/profile" style={{
                            "color": "white",
                            "background-color": "black",
                            "text-decoration": "none",
                            "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"
                        }}>FOLLOWERS</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container" style={{"border-style": "solid", "border-color": "grey"}}>
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
                <FavoriteComponentOther/>
            </div>
            <br/><br/>
            <br/> <br/> <br/>
        </div>

    );
}


export default OtherProfileScreen;