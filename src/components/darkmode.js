import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
      </button>

      <h2>{isDarkMode ? 'Mode sombre activé' : 'Mode clair activé'}</h2>
    </div>
  );
};

export default DarkModeToggle;
