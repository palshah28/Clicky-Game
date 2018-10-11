import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="img-container">
        <a onClick={() => props.selectFriend(props.name)} className = { props.currentScore === 0 ? "image image_ex" : "image"} >
            <img className="card" alt={props.name} src={props.image} />
        </a>
    </div>

);

export default CharacterCard;
