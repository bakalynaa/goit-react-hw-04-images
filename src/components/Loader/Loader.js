import React from 'react';

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        aria-label="Loader"
        role="img"
      >
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="15" />
      </svg>
    </div>
  );
};

export default Loader;
