import React from "react";
import ProfListItem from "./ProfListItem";
import "../Styles/card.css"

const ProfileList = () => {
    return (
        <ul className="list-group">
            <ProfListItem/>
        </ul>
    );
}

export default ProfileList;
