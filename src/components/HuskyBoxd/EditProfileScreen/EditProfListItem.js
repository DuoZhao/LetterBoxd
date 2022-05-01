import React, {useRef} from "react";
import EditProfileNavigationComponent from "./EditProfileNavigationComponent";
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateUser, updateUserReal} from "../actions/user-actions";
import {useProfile} from "../contexts/profile-context";
import Navigation from "../Navigation";


const EditProfListItem = () => {
    const prof = useSelector(state => state.profileReducer);
    const {profile} = useProfile();
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        if (profile && profile._id) {
            if (profile.realUser === false) {
                console.log('1')
                updateUser(dispatch, profile._id, usernameEdited.current.value, emailEdited.current.value, RealIdEdited.current.value)
                if (RealIdEdited.current.value){
                    updateUserReal(dispatch, profile._id, true)
                }

            }
            else {
                if (!RealIdEdited.current.value){
                    console.log(RealIdEdited.current.value)
                    updateUser(dispatch, profile._id, usernameEdited.current.value, emailEdited.current.value, RealIdEdited.current.value);
                    updateUserReal(dispatch, profile._id, false)
                }
                else{
                    console.log(RealIdEdited.current.value)
                    updateUser(dispatch, profile._id, usernameEdited.current.value, emailEdited.current.value, RealIdEdited.current.value);
                }
            }
        } }
        // dispatch({type: 'save', bio, website, username, location, email})

    const usernameEdited = useRef();
    const emailEdited = useRef();
    const RealIdEdited = useRef();


    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            <Navigation login={true}/>
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

                            <br/>
                            Email Address: <br/>
                            <textarea  placeholder="Your Email" ref={emailEdited}
                                   style={{"width": "90%", "background-color": "#445566"}}>
                                {profile && profile.email}
                            </textarea>
                            <br/><br/>

                            <br/>
                            Real ID: <br/>
                            <textarea  ref={RealIdEdited}
                                       style={{"width": "90%", "background-color": "#445566"}}>
                                {profile && profile.realID}
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
                                <br/><br/><br/><br/><br/>
                            </div>
                            <br/><br/><br/><br/><br/>
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
