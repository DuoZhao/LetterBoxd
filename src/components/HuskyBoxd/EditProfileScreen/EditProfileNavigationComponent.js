import React from "react";
import {Link} from "react-router-dom";


const EditProfileNavigationComponent = ({
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
            <h1 style={{"font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>Account Settings</h1>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to="/huskyboxd/editprofile" style={{"text-decoration": "none"}}>PROFILE</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/huskyboxd/profile"
                              style={{"text-decoration": "none", "color": "green"}}>AVATAR</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile"
                              style={{"text-decoration": "none", "color": "green"}}>CONNECTIONS</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/movie/profile"
                              style={{"text-decoration": "none", "color": "green"}}>NOTIFICATIONS</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/huskyboxd/stores_streaming" style={{"text-decoration": "none", "color": "green"}}>STORES
                            & STREAMING</Link>
                    </div>
                    <div className="col-2">
                        <Link to="/huskyboxd/import_export" style={{"text-decoration": "none", "color": "green"}}>IMPORT
                            & EXPORT</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileNavigationComponent;
