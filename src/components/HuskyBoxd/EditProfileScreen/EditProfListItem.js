import React from "react";
import EditProfileNavigationComponent from "./EditProfileNavigationComponent";


const EditProfListItem = ({
                              prof = {
                                  "firstName": "Jiedong",
                                  "lastName": "Lang",
                                  "handle": "Code Elite",
                                  "profilePicture": "../../../../tuiter/martin.jpg",
                                  "bannerPicture": "../../../../tuiter/interstellar.jpg",
                                  "bio": "Student, Data Scientist, Algorithm Engineer",
                                  "website": "youtube.com/webdevtv",
                                  "location": "Boston, MA",
                                  "dateOfBirth": "3/1998",
                                  "dateJoined": "12/2020",
                                  "films": 1638,
                                  "thisyear": 57,
                                  "lists": 12,
                                  "followingCount": 666,
                                  "followersCount": 0
                              }
                          }) => {

    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            <EditProfileNavigationComponent/>
            <br/>
            <h3 style={{"padding-left": "50px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>Profile
                Settings</h3>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="container">
                            Name: <br/>
                            <input type="text" placeholder="Superman"
                                   style={{"width": "90%", "background-color": "#445566"}}/>
                            <br/><br/>
                            <div className="row">
                                <div className="col-6">
                                    GivenName: <br/>
                                    <input type="text" style={{"background-color": "#445566"}}/>
                                </div>
                                <div className="col-6">
                                    FamilyName: <br/>
                                    <input type="text" style={{"background-color": "#445566"}}/>
                                </div>
                            </div>
                            <br/>
                            Email Address: <br/>
                            <input type="text" placeholder="superman@mail.com"
                                   style={{"width": "90%", "background-color": "#445566"}}/>
                            <br/><br/>
                            <div className="row">
                                <div className="col-6">
                                    Location: <br/>
                                    <input type="text" style={{"background-color": "#445566"}}/>
                                </div>
                                <div className="col-6">
                                    Website: <br/>
                                    <input type="text" style={{"background-color": "#445566"}}/>
                                </div>
                            </div>
                            <br/>
                            Bio: <br/>
                            <input type="text"
                                   style={{"width": "90%", "height": "200px", "background-color": "#445566"}}/>
                            <br/> <br/>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button"
                                            style={{"width": "200px", "background-color": "purple"}}>CHANGE PASSWORD
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" style={{"width": "200px", "background-color": "green"}}>SAVE
                                        CHANGES
                                    </button>
                                </div>
                            </div>
                            <br/> <br/>
                        </div>
                    </div>

                    <div className="col-6">
                        <h3 style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>Favourite Films</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-3" style={{
                                    "border-style": "solid",
                                    "border-color": "#445566",
                                    "height": "200px",
                                    "background-color": "grey",
                                    "position": "relative"
                                }}>
                                    <div style={{
                                        "position": "absolute",
                                        "padding-top": "77px",
                                        "padding-left": "47px",
                                        "height": "30px",
                                        "weight": "30px"
                                    }}>
                                        <button type="button"
                                                style={{"background-color": "#445566", "border-radius": "70%"}}>+
                                        </button>
                                    </div>
                                </div>
                                <div className="col-3" style={{
                                    "border-style": "solid",
                                    "border-color": "#445566",
                                    "height": "200px",
                                    "background-color": "grey"
                                }}>
                                    <div
                                        style={{"position": "absolute", "padding-top": "77px", "padding-left": "47px"}}>
                                        <button type="button"
                                                style={{"background-color": "#445566", "border-radius": "50%"}}>+
                                        </button>
                                    </div>
                                </div>
                                <div className="col-3" style={{
                                    "border-style": "solid",
                                    "border-color": "#445566",
                                    "height": "200px",
                                    "background-color": "grey"
                                }}>
                                    <div
                                        style={{"position": "absolute", "padding-top": "77px", "padding-left": "47px"}}>
                                        <button type="button"
                                                style={{"background-color": "#445566", "border-radius": "50%"}}>+
                                        </button>
                                    </div>
                                </div>
                                <div className="col-3" style={{
                                    "border-style": "solid",
                                    "border-color": "#445566",
                                    "height": "200px",
                                    "background-color": "grey"
                                }}>
                                    <div
                                        style={{"position": "absolute", "padding-top": "77px", "padding-left": "47px"}}>
                                        <button type="button"
                                                style={{"background-color": "#445566", "border-radius": "50%"}}>+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfListItem;
