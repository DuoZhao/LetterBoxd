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

            <div className="container">

                {/*<div style={{"height": "400px"}}>*/}
                <div>
                    {finalProfile && finalProfile.bannerPicture && < img src={finalProfile.bannerPicture}
                                                                         style={{objectFit: 'cover'}} height="550px" width="100%"/>}
                    {finalProfile && !finalProfile.bannerPicture && < img src="../../pictures/default.png"
                                                                          style={{objectFit: 'cover'}} height="550px" width="100%"/>}
                </div>
                <div className="row">
                    <div className="col ms-2 position-relative">
                        {finalProfile && finalProfile.profilePicture && <img src={finalProfile && finalProfile.profilePicture} className="rounded-circle"
                                                        style={{"border-radius": "50%", "float": "left"}}/>}

                        {finalProfile && !finalProfile.profilePicture && <img src="../../pictures/images/avatar/3.jpg"
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
                    </div>
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
                    <FavoriteComponentOther/>
                </div>

            </div>
            <br/><br/>
            <br/> <br/> <br/>
        </div>
    );
}


export default OtherProfileScreen;