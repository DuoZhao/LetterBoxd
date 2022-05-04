import React from "react";
import "./CommentsComponents.css"
import "../Styles/card.css"
import "../Styles/comment.css"
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import avatar from "./default_avatar.png";

const CommentsComponents = ({comment}) => {
    const navigate = useNavigate()
    const {profile} = useProfile();

    if (!profile) {
        navigate(`/huskyboxd/login`)
    }
    const NavigateToProfile = (userID) => {
        navigate(`/huskyboxd/profile/` + userID)
    }

    const NavigateToDetail = (movieID) => {
        navigate(`/huskyboxd/detail/` + movieID)
    }

    const star = [<i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>, <span><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/><i className="fas fa-star" style={{color: "rgb(0, 224, 84)"}}/></span>];
    let n = Math.floor(Math.random() * 3) + 1;
    let finalStar = star[n];


    //console.log("IN COMM CHECK");
    //console.log(comment.isDetail === false);
    const toShowPoster = comment.isDetail === false;

    return (
        <>
            {
                toShowPoster && <div className="row mt-3 wd-divider">
                    <div className="col-1 me-2">
                    <div className="wd-card" style={{width: "74px", height: "109px"}}
                         onClick={() => NavigateToDetail(comment.imdbID)}>
                        <img src={comment.Poster} alt=""/>
                    </div>
                </div>
                    <div className="col-9" style={{marginLeft: "40px"}}>
                    <div className="row">
                        <div className="position-absolute col-5">
                            <span className="wd-movie-name">{comment.Title}</span>
                            <b className="ms-2 wd-movie-time position-relative">{comment.Year}</b>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6">
                            {/*<img src={comment.u_avatar} className="wd-avatar" alt="..."/>*/}
                            <img src={avatar} className="wd-avatar" alt="..."/>
                            <b className="mt-1 ms-2 wd-username position-absolute"
                               onClick={() => NavigateToProfile(comment.userID)}>
                                {comment.username}
                                {finalStar}
                            </b>
                            <br/>

                        </div>

                        <span className="wd-comment mt-2">{comment.comment}</span>
                        <div>
                            <i className="far fa-heart wd-text-color">
                                <text className="wd-number"> {comment.likes} likes</text>
                            </i>
                        </div>

                    </div>
                </div>
                </div>
            }
            {
                !toShowPoster && <div className="row mt-2 wd-divider">
                    <div className="col-1">
                        {/*<img src={comment.u_avatar} className="wd-avatar" alt="..."/>*/}
                        <img src={avatar} className="wd-avatar" alt="..."/>
                        {/*<b className="mt-1 ms-2 wd-username position-absolute"*/}
                        {/*   onClick={() => NavigateToProfile(comment.userID)}>*/}
                        {/*    {comment.username}*/}
                        {/*</b>*/}
                        {/*<br/>*/}
                    </div>
                    <div className="col-8">
                        <div>
                            <span style={{fontSize: "13px"}}>Review by: </span>
                            <span className="d-inline">
                                <b className="wd-username">{comment.username}</b>
                                {finalStar}
                            </span>
                        </div>
                        <span className="wd-comment mt-2">{comment.comment}</span>
                    </div>
                </div>
            }
        </>
    );
}
export default CommentsComponents;