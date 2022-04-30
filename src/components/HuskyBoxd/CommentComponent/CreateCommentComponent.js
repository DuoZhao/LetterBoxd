import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
//import pic from "./3.jpg"
import "../MovieDetailScreen/index.css"
// import "../MovieDetailScreen/index.css"
//import {createTuit} from "../../actions/tuits-action"

const CreateComment = () => {
    // let [newTuit, setNewTuit] = useState(
    //     {tuit: 'New tuit', likes : 0, dislikes : 0, liked: false, disliked: false});
    // const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col-1 me-1">
                {/*<img src ="https://avatarfiles.alphacoders.com/241/thumb-241744.png" className="wd-tweet-img" alt="..."/>*/}
            </div>
            <div className="col-10">
                <textarea className="form-control"
                  placeholder="Your Comment">
        </textarea>
                <div style={{height: "5px"}}/>
                <i className="far fa-image text-primary me-3"/>
                <i className="fa fa-chart-line text-primary me-3"/>
                <i className="far fa-smile text-primary me-3"/>
                <i className="far fa-calendar text-primary"/>
                <button className="btn btn-primary btn-block rounded-pill float-end">
                    Comment
                </button>
            </div>
        </div>
    );
}
export default CreateComment;