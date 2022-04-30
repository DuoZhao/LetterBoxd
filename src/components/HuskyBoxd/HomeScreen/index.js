import React from "react";
import HomeComponents from "./HomeComponents";
import Navigation from "../Navigation";
import MoviesList from "../MoviesListComponent";
import Comments from "../CommentComponent";
import PopularList from "../PopularList";
import {useProfile} from "../contexts/profile-context";

const HomeScreen = ({
                        login
                    }) => {

    const {profile} = useProfile();
    login = (profile !== undefined);
    //console.log(profile === null);
    return (
        <>
            <div style={{backgroundColor: "rgba(20,24,28,255)"}}>

                {/*Navigation bar*/}
                <div className="row">
                    <Navigation login={login}/>
                </div>

                {/*Homepage*/}
                <div className="row mt-auto">
                    <HomeComponents login={login}/>
                </div>

                {/*Watched list*/}
                <div className="row mt-1">
                    <div className="col-1"/>
                    <div className="col-10">
                        <MoviesList/>
                    </div>
                    <div className="col-1"/>
                </div>

                {/*Popular movie list*/}
                <div className="row mt-1">
                    <div className="col-1"/>
                    <div className="col-10">
                        <MoviesList/>
                    </div>
                    <div className="col-1"/>
                </div>

                {/*Comments*/}
                <div className="row mt-auto">
                    <div className="col-1"/>

                    <div className="col-5">
                        <Comments/>
                    </div>

                    <div className="col-1"/>

                    <div className="col-4">
                        <PopularList/>
                    </div>

                    <div className="col-1"/>
                </div>
            </div>
        </>
    );
}
export default HomeScreen;