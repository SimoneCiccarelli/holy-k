import React, { useState } from 'react';
import './App.css';

import cardImage from './assets/images/150.png';
import logo from './assets/images/150.png';

function App() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, name: 'Card 1', imageUrl: cardImage, description: 'Descrizione 1' },
    { id: 2, name: 'Card 2', imageUrl: cardImage, description: 'Descrizione 2' },
    { id: 3, name: 'Card 3', imageUrl: cardImage, description: 'Descrizione 3' },
    { id: 4, name: 'Card 4', imageUrl: cardImage, description: 'Descrizione 4' },
    { id: 5, name: 'Card 5', imageUrl: cardImage, description: 'Descrizione 5' },
    { id: 6, name: 'Card 6', imageUrl: cardImage, description: 'Descrizione 6' },
    { id: 7, name: 'Card 7', imageUrl: cardImage, description: 'Descrizione 7' },
    { id: 8, name: 'Card 8', imageUrl: cardImage, description: 'Descrizione 8' },
    { id: 9, name: 'Card 9', imageUrl: cardImage, description: 'Descrizione 9' },
    { id: 10, name: 'Card 10', imageUrl: cardImage, description: 'Descrizione 10' },
    { id: 11, name: 'Card 11', imageUrl: cardImage, description: 'Descrizione 11' },
    { id: 12, name: 'Card 12', imageUrl: cardImage, description: 'Descrizione 12' },
  ];

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src={logo} alt="HolyK Logo" className="logo" />
        </div>
      </header>
      <main>
        <div className="cards-table">
          {cards.map((card, index) => (
            <div key={card.id} className="card" onClick={() => openCarousel(index)}>
              <img src={card.imageUrl} alt={card.name} className="card-image" />
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {isCarouselOpen && (
          <div className="carousel-overlay">
            <button className="close-btn" onClick={closeCarousel}>×</button>
            <button className="prev-btn" onClick={goToPrevious}>←</button>
            <div className="carousel-content">
              <img src={cards[currentIndex].imageUrl} alt={cards[currentIndex].name} className="carousel-image" />
              <h2>{cards[currentIndex].name}</h2>
              <p>{cards[currentIndex].description}</p>
            </div>
            <button className="next-btn" onClick={goToNext}>→</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
