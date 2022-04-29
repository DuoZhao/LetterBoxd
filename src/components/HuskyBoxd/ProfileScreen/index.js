import React, {useEffect} from "react";
import ProfileList from './ProfileList';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {findUserByID} from "../actions/user-actions";


const ProfileScreen = () => {
    const prof = useSelector((state) => state.profileReducer);
    const {userId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => findUserByID(dispatch, userId, true), []);

    return (
        <div>

            <div>
                <ProfileList prof={prof}/>
            </div>


        </div>

    );
};
export default ProfileScreen;
