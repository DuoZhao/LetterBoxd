import React from "react";
import "./CommentsComponents.css"
import "../Styles/card.css"
import "../Styles/comment.css"
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

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

    return (
        <>
            <div className="row mt-3 wd-divider">
                <div className="col-1 me-2">
                    <div className="wd-card" style={{width: "74px", height: "109px"}}
                         onClick={() => NavigateToDetail(comment.imdbID)}>
                        <img src={comment.Poster} alt=""/>
                    </div>
                </div>
                <div className="col-9" style={{marginLeft: "40px"}}>
                    <div className="row">
                        <div className="col-2">
                            <span className="wd-movie-name">{comment.Title}</span>
                            <b className="ms-2 wd-movie-time">{comment.Year}</b>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={comment.u_avatar} className="wd-avatar" alt="..."/>
                            <b className="ms-1 wd-username position-absolute" onClick={() => NavigateToProfile(comment.userID)}>{comment.username}</b>
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
        </>
    );
}
export default CommentsComponents;