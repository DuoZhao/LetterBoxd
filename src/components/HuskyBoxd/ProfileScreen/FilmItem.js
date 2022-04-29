import React from "react";
import "../Styles/card.css";

const FilmItem = ({
                   prof = {
                       "_id": "123",
                       "firstName": "Zhengyan",
                       "lastName": "Mr.",
                       "profilePicture": "../pictures/peaky_blinder.jpg",
                       "film1": "../pictures/matrix.jpg",
                       "film2": "../pictures/NinjaTurtles.jpg",
                       "film3": "../pictures/spiderman.png",
                       "film4": "../pictures/spiderman2.jpg",
                       "film5": "../pictures/idiots3.jpg",
                       "film6": "../pictures/readyplayerone.jpg",
                       "film7": "../pictures/matrix.jpg",
                       "film8": "../pictures/NinjaTurtles.jpg",
                       "film9": "../pictures/spiderman.png",
                       "film10": "../pictures/spiderman2.jpg",
                       "film11": "../pictures/idiots3.jpg",
                       "film12": "../pictures/readyplayerone.jpg",

                   }
               }) => {

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film1} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film2} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>34,612 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>155 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film3} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>71,089 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>20 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film4} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film5} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>34,612 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>155 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film6} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>71,089 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>20 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film7} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film8} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>34,612 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>155 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film9} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>71,089 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>20 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film10} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>3,015 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>724 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film11} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>34,612 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>155 </p>
                        </div>
                    </div>

                    <div className="wd-profilefilms col-1">
                        <a href="/">
                            <img src={prof.film12} className="wd-img" alt="movie name" style={{"width": "100%"}}/>
                        </a>
                        <div className="wd-cover-img">
                            <i className="fas fa-eye" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>71,089 </p>
                            <i className="fas fa-heart" style={{"font-size": "20px"}}/> <p
                            style={{"font-size": "20px"}}>20 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmItem;
