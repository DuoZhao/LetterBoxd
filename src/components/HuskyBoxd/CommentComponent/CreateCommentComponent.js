import React, {useState} from "react";
import "../MovieDetailScreen/index.css"
import {useProfile} from "../contexts/profile-context";
import {useDispatch} from "react-redux";
import {updateMovieComment} from "../actions/movie-action";

const CreateComment = ({movie}) => {
    const {profile} = useProfile();
    const [comment, setComment] = useState({username: profile && profile.username, userID: profile && profile._id});
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
            <div className="col-2"/>
            <div className="col-10">
                <textarea className="form-control w-75" placeholder="Your Comment"
                          onChange={(e) => setComment({...comment, comment: e.target.value})}/>
                <div style={{height: "5px"}}/>
                <i className="far fa-image text-primary me-3"/>
                <i className="fa fa-chart-line text-primary me-3"/>
                <i className="far fa-smile text-primary me-3"/>
                <i className="far fa-calendar text-primary"/>

                <button className="btn btn-primary btn-block rounded-pill wd-comment-btn float-end"
                         style={{marginRight : "270px"}} onClick={commentBtnHandler}>
                    Comment
                </button>
            </div>
        </div>
    );
}
export default CreateComment;