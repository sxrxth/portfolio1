import React, { useState } from 'react';

function DarkModeToggle({ onToggle }) {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    onToggle(!isLightMode); 
  };

  return (
    <button onClick={toggleMode}>
      {isLightMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;