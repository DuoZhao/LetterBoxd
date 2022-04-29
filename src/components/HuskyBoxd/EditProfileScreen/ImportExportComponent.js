import React from "react";
import EditProfileNavigationComponent from "./EditProfileNavigationComponent";


const ImportExportComponent = () => {

    return (
        <div style={{backgroundColor: "rgba(20,24,28,255)", "height": "100%"}}>
            <EditProfileNavigationComponent/>
            <br/><br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-7">
                        <text style={{"font-size": "30px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                            Account Data
                        </text>
                        <br/><br/><br/>
                        <text style={{"font-size": "20px", "font-family": "TiemposHeadlineWeb-Bold,Georgia,serif"}}>
                            Import data to your account, or export your account in CSV format:
                        </text>
                        <br/><br/><br/>
                        <div>
                            <button type="button"
                                    style={{"width": "200px", "background-color": "grey", "font-size": "20px"}}>IMPORT
                                YOUR DATA
                            </button>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <button type="button"
                                    style={{"width": "200px", "background-color": "grey", "font-size": "20px"}}>EXPORT
                                YOUR DATA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default ImportExportComponent;
