import React from 'react';

const Card = ({ card }) => {
  console.log('card:::::::::::::::::: ', card);
  console.log(card.name);
  return (
    <li
      key={card.id}
      className="w-full h-10 bg-slate-700 flex items-center justify-center text-xs font-medium first:rounded-t-lg mb-[2px] last:rounded-b-lg"
    >
      <button onClick={() => console.log(card.href)} className="w-full h-full">
        {card.name}
      </button>
    </li>
  );
};

export default Card;