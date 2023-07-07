import React from "react";

const Experience = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <img src={props.image}alt="Logo de l'entreprise" />
        <p>{props.description}</p>
      </div>
    );
  };
  

export default Experience;
