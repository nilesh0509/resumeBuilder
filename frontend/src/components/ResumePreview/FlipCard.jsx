import React, { useState } from 'react';

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full h-full perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">{front}</div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">{back}</div>
      </div>
      <button
        onClick={() => setFlipped(!flipped)}
        className="mt-4 btn btn-outline"
      >
        {flipped ? 'Show Preview' : 'Flip to Download'}
      </button>
    </div>
  );
};

export default FlipCard;