import React from "react";
import CommentsComponents from "./CommentsComponents";
import comment from "../data/comment.json"

const Comments = () => {

    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456", display: "center"}}>
                POPULAR REVIEWS THIS WEEK
            </div>
            <>
                {
                    comment.map(c => {
                        return (<CommentsComponents comment={c}/>)
                    })
                }
            </>
        </div>
    );
}
export default Comments;