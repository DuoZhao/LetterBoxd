import React, {useEffect} from "react";
import HomeComponents from "./HomeComponents";
import Navigation from "../Navigation";
import MoviesList from "../MoviesListComponent";
import Comments from "../CommentComponent";
import PopularList from "../PopularList";
import {useProfile} from "../contexts/profile-context";
import {useDispatch, useSelector} from "react-redux";
import {getRandomMovies} from "../actions/movie-action";

const HomeScreen = () => {

    const {profile} = useProfile();
    const login = (profile !== undefined);
    const movie = useSelector(state => state.movie);
    console.log(movie);
    const dispatch = useDispatch();

    useEffect(() => {
        getRandomMovies(dispatch);
        }, []);

    return (
        <>
            <div style={{backgroundColor: "rgba(20,24,28,255)"}}>

                {/*Navigation bar*/}
                <div className="row">
                    <Navigation login={login}/>
                </div>

                <div className="container">

                    {/*Homepage*/}
                    <div className="row mt-auto">
                        <HomeComponents profile={profile}/>
                    </div>

                    {/*Watched list*/}
                    <div className="row mt-1">
                        <div className="col-1"/>
                            <div className="col-10">
                            <MoviesList movie={movie}/>
                        </div>
                        <div className="col-1"/>
                    </div>
                {/*Comments*/}
                <div className="row mt-auto">
                    <div className="col-1"/>

                    <div className="col-5">
                        <Comments movie={movie}/>
                    </div>

                    <div className="col-5" style={{display: "center"}}>
                        <PopularList/>
                    </div>

                    <div className="col-1"/>
                </div>

                </div>
            </div>
        </>
    );
}
export default HomeScreen;