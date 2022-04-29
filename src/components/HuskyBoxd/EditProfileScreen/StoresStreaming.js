import React from "react";
import EditProfileNavigationComponent from "./EditProfileNavigationComponent";


const StoresStreaming = () => {
    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)"}}>
            <EditProfileNavigationComponent/>
            <br/><br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-3">
                        <text>
                            Amazon
                        </text>
                        <text>
                            DVD, Blu-ray etc.
                        </text>
                    </div>
                    <div className="col-3">
                        <div>
                            <select id="select-one-genre" style={{"background-color": "grey"}}>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option selected value="Select primary store...">Select primary store...</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <select id="select-one-genre" style={{"background-color": "grey"}}>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option selected value="Select primary store...">Select primary store...</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-3">
                        <text>
                            iTunes
                        </text>
                    </div>
                    <div className="col-3">
                        <div>
                            <select id="select-one-genre" style={{"background-color": "grey"}}>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option selected value="Select primary store...">Select primary store...</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <select id="select-one-genre" style={{"background-color": "grey"}}>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                                <option selected value="Select primary store...">Select primary store...</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-8">
                        <text>
                            Upgrade to a Pro account to select and filter by additional services you subscribe to.
                            Select from any service/country pairing on JustWatch as well as all iTunes countries.
                            Become a Pro!
                        </text>
                    </div>
                    <div className="col-2">
                        <div>
                            <button type="button"
                                    style={{"width": "150px", "background-color": "grey", "font-size": "15px"}}>BECOME A
                                PRO!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default StoresStreaming;
