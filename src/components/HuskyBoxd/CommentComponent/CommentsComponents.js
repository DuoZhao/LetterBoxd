import React, {useEffect, useRef, useState} from "react";
import "./CommentsComponents.css"
import "../Styles/card.css"
import "../Styles/comment.css"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useProfile} from "../contexts/profile-context";
import {findUserByID} from "../actions/user-actions";

const CommentsComponents = (
    {
        comment = {
            "m_poster": "https://image.tmdb.org/t/p/w185//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            "_id":"12345",
            "m_name": "SpiderMan",
            "m_year": "2022",
            "u_avatar": "../pictures/images/avatar/1.jpg",
            "u_name": "Giorno Giovanna",
            "u_comments": "Is it good? Is it Bad? I can't tell you, and neither can anyone else, because there is absolutely no way at the moment to watch this movie on any format. Any of those currently 27 people who say they've watched it are lying",
            "likes": 19
        }

    }) => {

    const navigate = useNavigate()


    const {profile} = useProfile();
    // const dispatch = useDispatch();

    if (!profile){
        navigate(`/huskyboxd/login`)
    }

    const userId=comment['id']
    const dispatch = useDispatch();


    const NavigateToProfile = async () => {
        navigate(`/huskyboxd/profile` + userId)
    }



    return (
        <>
            <div className="row mt-3 wd-divider">
                <div className="col-1 me-2">
                    <div className="wd-card" style={{width: "74px", height: "109px"}}>
                        <img onClick={NavigateToProfile}  src={comment.m_poster}
                             alt="comment poster"/>
                    </div>
                </div>
                <div className="col-9" style={{marginLeft: "40px"}}>
                    <div className="row">
                        <div className="col-2">
                            <span className="wd-movie-name">{comment.m_name}</span>
                            <b className="ms-2 wd-movie-time">{comment.m_year}</b>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={comment.u_avatar} className="wd-avatar" alt="..."/>
                            <b className="ms-1 wd-username position-absolute">{comment.username}</b>
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