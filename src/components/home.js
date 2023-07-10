import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1>Bienvenue sur mon portfolio !</h1>
      <p>
        Je suis {props.nom} {props.prenom}, {props.formation}
      </p>
    </div>
  );
};

export default Home;
