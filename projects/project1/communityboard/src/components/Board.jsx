import React from "react";
import '/src/index.css'
const Board = (props) => {
  return (
    <div className="food-card">
       <img className="food-img" src={`src/assets/${props.image}`} />
      <p className="name">{props.name}</p>
      <p className="cuisine">{props.cuisine}</p>
    </div>
  );
};

export default Board;
