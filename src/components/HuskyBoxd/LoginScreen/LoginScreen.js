import React from "react";
import LoginComponent from "./LoginComponent";
import Navigation from "../Navigation";

const LoginScreen = () => {
    return (
        <>
            <Navigation login={true}/>
            <LoginComponent/>
        </>
    );
};
export default LoginScreen;