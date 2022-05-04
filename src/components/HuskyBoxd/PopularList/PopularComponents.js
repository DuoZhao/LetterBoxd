import React from "react";
import "./index.css"
import "../Styles/card.css"
import {Link} from "react-router-dom";

const PopularComponents = () => {
    return (
        <div className="mt-3 position-relative">
            {/*<div className="row">*/}
            {/*    <div className="container" style={{height: "105px", width:"300px"}}>*/}
            {/*        <img className="image1" style={{width : "70px", height: "105px"}} src = {img1}/>*/}
            {/*        <img className="image2" style={{width : "70px", height: "105px"}} src = {img2}/>*/}
            {/*        <img className="image3" style={{width : "70px", height: "105px"}} src = {img3}/>*/}
            {/*        <img className="image4" style={{width : "70px", height: "105px"}} src = {img4}/>*/}
            {/*        <img className="image5" style={{width : "70px", height: "105px"}} src = {img5}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <img
                                src="https://a.ltrbxd.com/resized/story/image/4/4/0/2/1/5/7/shard/7368/blob-960-960-0-0-fill.jpg?k=af09be2eaf"
                                height="150px"/>
                            <div className="container">
                                <h5><b>Epidemiologists Unpack HBO’s ‘How to Survive a Pandemic’</b></h5>
                                <p>One of the the most reassuring elements on display at the 2022 Sloan Film
                                    Summit—which took place earlier this month, April 8-10, in LA’s Little Tokyo
                                    neighborhood—was that of the event’s omnipresent COVID-19 safety procedures. Regular
                                    testing for all staff and attendees! Indoor mask requirements! Limited indoor event
                                    seating!</p>
                            </div>
                        </div>
                        <div style={{
                            "border-style": "solid",
                            "border-top": "none",
                            "border-bottom": "none",
                            "border-left": "none",
                            "border-right": "none",
                            "height": "20px"
                        }}>
                        </div>
                        <div className="card">
                            <img
                                src="https://a.ltrbxd.com/resized/story/image/4/2/8/8/6/2/0/shard/7354/blob-960-960-0-0-fill.jpg?k=d2c7e5bb2e"
                                height="150px"/>
                            <div className="container">
                                <h5><b>From Script to Screen: The Strange Alchemy of ‘Bad Lieutenant</b></h5>
                                <p>The word “iguana” doesn’t appear in the shooting script of Bad Lieutenant: Port of
                                    Call New Orleans. And why should it? Written by veteran TV writer William
                                    Finkelstein, the script unfolds with the cause-and-effect logic of a tight police
                                    procedural. Prior to penning Bad Lieutenant, Finkelstein wrote more than 50 episodes
                                    of L.A. Law, created and wrote on Brooklyn South, and contributed to such cop show
                                    staples as Law & Order and NYPD Blue. The man knows how to write a coherent crime
                                    drama. </p>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default PopularComponents;