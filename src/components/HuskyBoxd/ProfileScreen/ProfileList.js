import React from "react";
import ProfListItem from "./ProfListItem";
import "../Styles/card.css"


const ProfileList = ({prof}) => {
    console.log(prof)

    return (
        <ul className="list-group">
            <ProfListItem prof={prof}/>
        </ul>
    );
}

export default ProfileList;