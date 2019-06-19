import React from "react";

const Character = props => {
  return (
    <div>
      <li>Name: {props.character.name}</li>
      <li>Height: {props.character.height}</li>
    </div>
  )
}

export default Character;
