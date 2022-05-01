import React, {useRef, useState} from "react";
import "../MovieDetailScreen/index.css"
import {useProfile} from "../contexts/profile-context";
import {useDispatch} from "react-redux";
import {updateMovieComment} from "../actions/movie-action";

const CreateComment = ({movie}) => {
    const {profile} = useProfile();
    const [comment, setComment] = useState({username: profile.username, userID: profile._id});
    const dispatch = useDispatch();
    const commentBtnHandler = () => {
        if (!profile || !profile.email) {
            alert("please login first and then comment");
        } else if (profile && !profile.realUser) {
            alert("Your account is not a REAL USER ACCOUNT, you cannot comment movie");
        } else if (comment) {
            updateMovieComment(dispatch, movie.imdbID, comment);
        }
    }
    return (
        <div className="row">
            <div className="col-10">
                <textarea className="form-control" placeholder="Your Comment" onChange={(e) => setComment({...comment, comment: e.target.value})}/>
                <div style={{height: "5px"}}/>
                <button className="btn btn-primary btn-block rounded-pill float-end wd-comment-btn" onClick={commentBtnHandler}>
                    Comment
                </button>
            </div>
        </div>
    );
}
export default CreateComment;