import React, {useContext, useState} from "react";
import * as service from "../services/auth-services";

const ProfileContext = React.createContext();

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const signin = async (email, password) => {
        try {
            const p = await service.signin(
                email,
                password
            )
            setProfile(p)
        } catch (e) {
            throw e
        }
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile()
            setProfile(p)
            return p
        } catch (e) {
            throw e
        }
    }

    const signup = async (username, email, password) => {
        try {
            const newUser = await service.signup(
                username,
                email,
                password
            )
            setProfile(newUser)
        } catch (e) {
            throw e
        }
    }

    const signupRealID = async (username, email, password, realID) => {
        const realUser = true;
        try {
            const newUser = await service.signupRealID(
                username,
                email,
                password,
                realID,
                realUser
            )
            setProfile(newUser)
        } catch (e) {
            throw e
        }
    }

    const logout = async () => {
        try {
            await service.logout()
            setProfile(undefined);
        } catch (e) {
            throw e
        }
    }

    const value = {profile, signup, checkLoggedIn, signin, signupRealID, logout}
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}