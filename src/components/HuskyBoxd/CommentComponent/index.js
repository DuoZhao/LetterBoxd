import React, {useEffect, useState} from "react";
import CommentsComponents from "./CommentsComponents";

const Comments = ({movie}) => {
    let historyList = {"history_comment": []};
    if (movie && !movie.history_comment) {
        for (let i = 0; i < movie.length; i++) {
            for (let j = 0; j < movie[i]["history_comment"].length; j++) {
                movie[i]["history_comment"][j]["Poster"] = movie[i]["Poster"];
                movie[i]["history_comment"][j]["Year"] = movie[i]["Year"];
                movie[i]["history_comment"][j]["Title"] = movie[i]["Title"];
                movie[i]["history_comment"][j]["imdbID"] = movie[i]["imdbID"];
                historyList["history_comment"].push(movie[i]["history_comment"][j])
            }
        }
        movie = historyList;
    }
    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456", display: "center"}}>
                POPULAR REVIEWS THIS WEEK
            </div>
            <>
                {
                    movie && movie.history_comment && movie.history_comment.map(
                        comment => <CommentsComponents comment={comment}/>
                    )
                }
            </>
        </div>
    );
}
export default Comments;