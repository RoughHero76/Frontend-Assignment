import React from 'react';
import './card.css'; // Create a CSS file for styling the cards

function Card() {
  return (
    <div className="card" draggable="true">
      {/* Card content */}
      Drag me!
    </div>
  );
}

export default Card;