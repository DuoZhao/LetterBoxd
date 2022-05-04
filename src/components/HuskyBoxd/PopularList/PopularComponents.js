import React from "react";
import "./index.css"
import "../Styles/card.css"
import {Link} from "react-router-dom";

const PopularComponents = () => {
    return (
        <div className="mt-3 position-relative">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{width : "30rem"}}>
                            <img src="https://a.ltrbxd.com/resized/story/image/4/6/3/6/6/1/3/shard/7337/blob-960-960-0-0-fill.jpg?k=1792ae4f91"
                                className="card-img-top"/>
                            <div className="card-body" style={{backgroundColor: "rgba(33,40,48,255)"}}>
                                <h5 className="card-title wd-movie-name">
                                    Director of the month: Claire Simon
                                </h5>
                                <p className="card-text wd-comment">
                                    This month, director Claire Simon has compiled a list of films that are resolutely humanistic and that shed light on the beauty of the world as well as its dangers.
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 card" style={{width : "18rem"}}>
                            <img src="https://a.ltrbxd.com/resized/story/image/5/2/4/4/4/4/1/shard/7437/blob-960-960-0-0-fill.jpg?k=2b71790039"
                                 className="card-img-top"/>
                            <div className="card-body" style={{backgroundColor: "rgba(33,40,48,255)"}}>
                                <h5 className="card-title wd-movie-name">
                                    Friday Night Film - PULSE
                                </h5>
                                <p className="card-text wd-comment">
                                    Read this story on our website here.
                                </p>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default PopularComponents;