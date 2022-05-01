import React, {useRef} from "react";
import EditProfileNavigationComponent from "./EditProfileNavigationComponent";
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateUser} from "../actions/user-actions";
import {useProfile} from "../contexts/profile-context";


const EditProfListItem = () => {
    const prof = useSelector(state => state.profileReducer);
    const {profile} = useProfile();
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        if (profile && profile._id) {
            updateUser(dispatch, profile._id, usernameEdited.current.value, emailEdited.current.value);
        }
    }

    let [username, setName] = useState({name: prof.username}) ;
    const nameHandler = (event) => {
        const username = event.target.value;
        const newName = {username : username};
        setName(newName);
        console.log(username)
    }

    let [bio, setBio] = useState({bio: prof.bio}) ;
    const bioHandler = (event) => {
        const bio = event.target.value;
        const newBio = { bio : bio};
        setBio(newBio);
    }

    let [location, setLocal] = useState({local: prof.location}) ;
    const locationHandler = (event) => {
        const location = event.target.value;
        const newLocation = {location : location}
        setLocal(newLocation);
    }

    let [website, setWeb] = useState({website : prof.website}) ;
    const websiteHandler = (event) => {
        const website = event.target.value;
        const newWeb = {website : website}
        setWeb(newWeb);
    }

    let [email, setEmail] = useState({email : prof.email}) ;
    const emailHandler = (event) => {
        const email = event.target.value;
        const newEmail = {email : email}
        setWeb(newEmail);
    }

    const usernameEdited = useRef();
    const emailEdited = useRef();
    const bioEdited = useRef();
    const websiteEdited = useRef();


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
                            <textarea ref={usernameEdited} placeholder="Your Name" id="username"
                                   style={{"width": "90%", "background-color": "#445566", "height":"35px"}}>
                                {profile && profile.username}
                            </textarea>
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
                            <textarea  placeholder="Your Email" ref={emailEdited}
                                   style={{"width": "90%", "background-color": "#445566"}}>
                                {profile && profile.email}
                            </textarea>
                            <br/><br/>
                            <div className="row">
                                <div className="col-6">
                                    Location: <br/>
                                    <input type="text" style={{"background-color": "#445566"}}/>
                                </div>
                                <div className="col-6">
                                    Website: <textarea  placeholder="Your Email" ref={websiteEdited}
                                                        style={{"width": "90%", "background-color": "#445566"}}>
                                                     {prof.website}
                                            </textarea>
                                </div>
                            </div>
                            <br/>
                            Bio: <br/>
                            <textarea  placeholder="Your Email" ref={bioEdited}
                                       style={{"width": "90%", "background-color": "#445566"}}>
                            </textarea>
                            <br/> <br/>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button"
                                            style={{"width": "200px", "background-color": "purple"}}>CHANGE PASSWORD
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" style={{"width": "200px", "background-color": "green"}} onClick={saveClickHandler}>SAVE
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
