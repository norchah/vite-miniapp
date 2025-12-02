import React from 'react';

const Card = ({id, name, icon}) => {
  return (
    <button id={id} className="flex flex-row">
      <img src={icon} alt={name} />

    </button>
  );
};

export default Card;