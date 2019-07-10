import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div className="card">
      <div className="img-container" onClick={() => props.shuffle()}>
        <img src={props.image} />
      </div>

  );
}

export default FriendCard;
