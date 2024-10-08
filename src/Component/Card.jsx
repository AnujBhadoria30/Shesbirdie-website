/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

function Card() {
  const cardItem = useSelector((store) => store.card.item);

  return (
    <div className="flex flex-wrap  justify-center items-center shadow-2xl space-y-2 bg-gray-400  border-2 ">
      {cardItem.length > 0 ? (
        cardItem.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Selected ${index}`}
            className="h-20 w-20 p-4"
          />
        ))
      ) : (
        <h1 className="text-xl">No images selected</h1>
      )}
    </div>
  );
}

export default Card;
