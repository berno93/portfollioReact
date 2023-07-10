import React from 'react';

const About = (props) => {
  return (
    <div>
      <h2>À propos de moi</h2>
      {/* <img src="chemin/vers/votre/photo.png" alt="Votre photo de profil" /> */}
      <p>{props.description}</p>
    </div>
  );
};

export default About;
