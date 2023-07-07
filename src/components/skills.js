import React from 'react';

const Skills = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Niveau : {props.niveau}</p>
    </div>
  );
};

export default Skills;
