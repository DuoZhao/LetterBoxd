import React from "react";
import {Link} from "react-router-dom";


const EditProfileNavigationComponent = ({
                                        }) => {

    return (
        <div className="container">
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>

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
        </div>
    );
}

export default EditProfileNavigationComponent;
