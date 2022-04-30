import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../Styles/card.css";
import {useDispatch, useSelector} from "react-redux";
import {useProfile} from "../contexts/profile-context";
import {findUserByID} from "../actions/user-actions";
import Navigation from "../Navigation";


const ProfListItem = () => {

    const navigate = useNavigate()
    const NavigateToEditProfile = async () => {
        navigate(`/huskyboxd/editprofile`)
    }

    const prof = useSelector(state => state.profileReducer);
    const {profile} = useProfile();
    const dispatch = useDispatch();
    // console.log(prof)

    const {userId} = useParams()
    if (userId){
        const other_user=findUserByID(dispatch, userId, true)
        console.log(other_user)
        return(
            <div style={{backgroundColor: "rgba(20,24,28,255)"}}>

                <div style={{"height": "400px"}}>
                    <img src={other_user.bannerPicture} height="550px" width="100%"/>
                </div>

                <div style={{"padding-top": "50px", "padding-left": "100px", "position": "relative"}}>
                    <img src={other_user.profilePicture} height="100px" width="100px"
                         style={{"border-radius": "50%", "float": "left"}}/>

                    <span style={{"height": "50px", "padding-left": "40px"}}>
                    <text style={{"color": "white", "font-size": "15px"}}><strong>{other_user.username}</strong></text>
                    <br/>
                    <text style={{"color": "grey", "font-size": "15px", "padding-left": "30px"}}>Prime Member</text>
                </span>

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
                            <strong style={{"color": "white"}}>{other_user.films}</strong>
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
                            <strong style={{"color": "white"}}>{other_user.thisyear}</strong>
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
                            <strong style={{"color": "white"}}>{other_user.lists}</strong>
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
                            <strong style={{"color": "white"}}>{other_user.followingCount}</strong>
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
                            <strong style={{"color": "white"}}>{other_user.followersCount}</strong>
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


                <br/><br/>

                <div className="container">
                    <div className="row">
                        <text>Favourite Movies</text>
                    </div>

                    <div style={{
                        "width": "100%",
                        "border-style": "solid",
                        "border-width": "thin",
                        "border-color": "white",
                        "border-left": "none",
                        "border-right": "none",
                        "border-bottom": "none"
                    }}>
                    </div>

                    <div className="wd-favoritefilms-list">
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/incredibles.jpg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/zootopia.webp" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms col-3">
                            <a href="/">
                                <img src="../pictures/coco.webp" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/Your_name_poster.jpg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>

                    </div>


                </div>

                <br/>

                <div className="container">
                    <div className="row">
                        <text>Recent Activities</text>
                    </div>

                    <div style={{
                        "width": "100%",
                        "border-style": "solid",
                        "border-width": "thin",
                        "border-color": "white",
                        "border-left": "none",
                        "border-right": "none",
                        "border-bottom": "none"
                    }}>
                    </div>

                    <div className="wd-favoritefilms-list">
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/readyplayerone.jpg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/Transformers5.jpg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms col-3">
                            <a href="/">
                                <img src="../pictures/interstellar.jpg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>
                        <div className="wd-favoritefilms  col-3">
                            <a href="/">
                                <img src="../pictures/bighero6.jpeg" className="wd-img" alt="movie name"
                                     style={{"width": "100%"}}/>
                            </a>
                            <div className="wd-cover-img">
                                <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>3,015 </p>
                                <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                                style={{"font-size": "20px"}}>724 </p>
                            </div>
                        </div>

                    </div>

                </div>

                <br/> <br/> <br/>

            </div>
        )
    }


    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            <Navigation login={true}/>

            <div style={{"height": "400px"}}>
                <img src={profile.bannerPicture} height="550px" width="100%"/>
            </div>

            <div style={{"padding-top": "50px", "padding-left": "100px", "position": "relative"}}>
                <div className="row">
                    <div className="col-1">
                        <img src={profile.profilePicture} height="100px" width="100px"
                             style={{"border-radius": "50%", "float": "left"}}/>
                    </div>
                    <div className="col-2">
                       <span style={{"height": "50px", "padding-left": "40px"}}>
                           <text style={{"color": "white", "font-size": "30px"}}><strong>{profile.username}</strong></text>
                           <br/>
                        <div style={{"padding-left": "70px"}}>
                            <button onClick={NavigateToEditProfile} style={{"color": "grey", "font-size": "15px"}}>
                                Edit Profile
                            </button>
                        </div>
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
                        <strong style={{"color": "white"}}>{profile.films}</strong>
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
                        <strong style={{"color": "white"}}>{profile.thisyear}</strong>
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
                        <strong style={{"color": "white"}}>{profile.lists}</strong>
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
                        <strong style={{"color": "white"}}>{profile.followingCount}</strong>
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
                        <strong style={{"color": "white"}}>{profile.followersCount}</strong>
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


            <br/><br/>

            <div className="container">
                <div className="row">
                    <text>Favourite Movies</text>
                </div>

                <div style={{
                    "width": "100%",
                    "border-style": "solid",
                    "border-width": "thin",
                    "border-color": "white",
                    "border-left": "none",
                    "border-right": "none",
                    "border-bottom": "none"
                }}>
                </div>

                <div className="wd-favoritefilms-list">
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/incredibles.jpg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/zootopia.webp" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms col-3">
                        <a href="/">
                            <img src="../pictures/coco.webp" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/Your_name_poster.jpg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                </div>


            </div>

            <br/>

            <div className="container">
                <div className="row">
                    <text>Recent Activities</text>
                </div>

                <div style={{
                    "width": "100%",
                    "border-style": "solid",
                    "border-width": "thin",
                    "border-color": "white",
                    "border-left": "none",
                    "border-right": "none",
                    "border-bottom": "none"
                }}>
                </div>

                <div className="wd-favoritefilms-list">
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/readyplayerone.jpg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/Transformers5.jpg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms col-3">
                        <a href="/">
                            <img src="../pictures/interstellar.jpg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>
                    <div className="wd-favoritefilms  col-3">
                        <a href="/">
                            <img src="../pictures/bighero6.jpeg" className="wd-img" alt="movie name"
                                 style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                </div>

            </div>

            <br/> <br/> <br/>

        </div>

    );
}


export default ProfListItem;