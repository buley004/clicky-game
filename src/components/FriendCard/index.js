import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
      <div className="img-container" onClick={() => props.checkImage(props.id)}>
        <img src={props.image} />
      </div>

  );
}

export default FriendCard;
