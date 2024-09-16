import React from 'react';
import Card from './Card';

function CardTable({ cards, openCarousel }) {
  return (
    <div className="cards-table">
      {cards.map((card, index) => (
            <Card name={card.name} imageUrl={card.imageUrl} description={card.description} className="card" onClick={() => openCarousel(index)} />
      ))}
    </div>
  );
}

export default CardTable;
