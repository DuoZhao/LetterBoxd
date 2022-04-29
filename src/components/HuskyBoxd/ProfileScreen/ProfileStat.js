import React from "react";
import {Link} from "react-router-dom";

const ProfileStat = ({
                  prof = {
                      "firstName": "Zhengyan",
                      "lastName": "Mr.",
                      "profilePicture": "../pictures/peaky_blinder.jpg",
                      "bannerPicture": "../pictures/stat_background.jpg",
                      "films": 51,
                      "hours": 27,
                      "directors": 15,
                      "countries": 30,
                      "statpicture": "../pictures/stat_bar.webp",
                      "stat_background2": "../pictures/stat_background2.jpg",
                      "stat_background3": "../pictures/stat_background3.jpg",
                      "films2019": 21,
                      "hours2019": 16,
                      "directors2019": 3,
                      "countries2019": 19,
                      "films2020": 18,
                      "hours2020": 5,
                      "directors2020": 8,
                      "countries2020": 11,
                      "films2021": 12,
                      "hours2021": 6,
                      "directors2021": 4,
                      "countries2021": 0,
                  }
              }) => {

    return (
        <div>
            <br/>
            <div style={{"padding-left": "20px"}}>
                <Link to="/huskyboxd/profile" style={{"text-decoration": "none", "color": "black"}}>
                    <button type="button" style={{
                        "width": "150px",
                        "background-color": "grey",
                        "font-size": "15px",
                        "border-radius": "30%"
                    }}>
                        Back
                    </button>
                </Link>
            </div>


            <div style={{"height": "400px", "position": "relative"}}>
                <img src={prof.bannerPicture} height="450px" width="100%" style={{"position": "absolute"}}/>
                <text style={{
                    "position": "absolute",
                    "padding-top": "150px",
                    "padding-left": "35%",
                    "font-size": "70px"
                }}>
                    <strong>A Life in Film</strong>
                </text>
                <text style={{
                    "position": "absolute",
                    "padding-top": "250px",
                    "padding-left": "34%",
                    "font-size": "30px"
                }}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s all time stat
                </text>
            </div>

            <br/> <br/>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.films}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.hours}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.directors}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.countries}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src={prof.statpicture} height="350px" width="100%"/>
            </div>

            <br/><br/><br/>

            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2021 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.films2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.hours2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.directors2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.countries2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src={prof.stat_background2} height="350px" width="100%"/>
            </div>

            <br/><br/><br/>

            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2020 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.films2020}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.hours2020}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.directors2020}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.countries2020}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <div>
                <img src={prof.stat_background3} height="350px" width="100%"/>
            </div>

            <br/><br/><br/>


            <div className="container">
                <text style={{"padding-left": "34%", "font-size": "30px"}}>
                    <img src={prof.profilePicture} height="50px" width="50px"
                         style={{"border-radius": "50%"}}/> {prof.lastName} {prof.firstName}'s 2019 stat
                </text>
                <div className="row">
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.films2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            FILMS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.hours2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            HOURS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.directors2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            DIRECTORS
                        </text>
                    </div>
                    <div className="col-3">
                        <text style={{"padding-left": "50%", "padding-right": "50%", "font-size": "50px"}}>
                            {prof.countries2019}
                        </text>
                        <br/>
                        <text style={{"padding-left": "50%", "padding-right": "50%"}}>
                            COUNTRIES
                        </text>
                    </div>
                </div>
            </div>

            <br/><br/><br/>


        </div>


    );
}

export default ProfileStat;
