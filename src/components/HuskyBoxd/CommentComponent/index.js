import React, {useEffect, useState} from "react";
import CommentsComponents from "./CommentsComponents";

const Comments = ({movie}) => {
    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456", display: "center"}}>
                POPULAR REVIEWS THIS WEEK
            </div>
            <>
                {
                    movie.history_comment && movie.history_comment.map(
                        comment => <CommentsComponents comment={comment}/>
                    )
                }
            </>
        </div>
    );
}
export default Comments;