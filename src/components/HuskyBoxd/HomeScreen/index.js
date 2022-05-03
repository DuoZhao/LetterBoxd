import React, {useEffect} from "react";
import HomeComponents from "./HomeComponents";
import Navigation from "../Navigation";
import MoviesList from "../MoviesListComponent";
import Comments from "../CommentComponent";
import PopularList from "../PopularList";
import {useProfile} from "../contexts/profile-context";
import {useDispatch, useSelector} from "react-redux";
import {getRandomMovies} from "../actions/movie-action";

const HomeScreen = ({login}) => {

    const {profile} = useProfile();
    login = (profile !== undefined);
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

                {/*Homepage*/}
                <div className="row mt-auto">
                    <HomeComponents login={login}/>
                </div>

                {/*Watched list*/}
                <div className="row mt-1">
                    <div className="col-1"/>
                    <div className="col-10">
                        <MoviesList movie={movie}/>
                    </div>
                    <div className="col-1"/>
                </div>

                {/*Popular movie list*/}
                {/*<div className="row mt-1">*/}
                {/*    <div className="col-1"/>*/}
                {/*    <div className="col-10">*/}
                {/*        <MoviesList/>*/}
                {/*    </div>*/}
                {/*    <div className="col-1"/>*/}
                {/*</div>*/}

                {/*Comments*/}
                <div className="row mt-auto">
                    <div className="col-1"/>

                    <div className="col-6">
                        <Comments movie={movie}/>
                    </div>

                    <div className="col-1"/>

                    <div className="col-3">
                        <PopularList/>
                    </div>

                    <div className="col-1"/>
                </div>
            </div>
        </>
    );
}
export default HomeScreen;