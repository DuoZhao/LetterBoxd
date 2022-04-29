import React from "react";
import PopularComponents from "./PopularComponents"


const PopularList = () => {
    return (
        <div className="ms-4">
            <div style={{borderBottom: "1px solid #456", display: "center"}}>
                POPULAR LIST THIS WEEK
            </div>
            <PopularComponents/>
        </div>
    )
}
export default PopularList;