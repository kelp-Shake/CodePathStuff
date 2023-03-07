import React from "react";
const Board = (props) => {
  return (
    <div className="food-card">
      <img className="food-img" src={props.img} />
      <p className="name">{props.name}</p>
      <p className="cuisine">{props.cuisine}</p>
      <button className="button" onclick={`window.location.href= ${props.website}`}>View website</button>
    </div>
  );
};

export default Board;
