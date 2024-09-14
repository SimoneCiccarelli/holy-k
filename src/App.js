import React, { useState, useEffect } from 'react';
import './App.css';

import stAnthony from './assets/images/st-anthony.png';
import stDanilo from './assets/images/st-danilo.png';
import stErica from './assets/images/st-erica.png';
import stLuca from './assets/images/st-luca.png';
import stMarcello from './assets/images/st-marcello.png';
import stMatteo from './assets/images/st-matteo.png';
import stMichael from './assets/images/st-michael.png';
import stSergio from './assets/images/st-sergio.png';
import stsAndreaJacopoFabio from './assets/images/sts-andrea-jacopo-fabio.png';

import logo from './assets/images/logo.png';

function App() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, name: 'Saint Anthony', imageUrl: stAnthony, description: 'Protector of the sins of the flesh' },
    { id: 2, name: 'Saint Danilo', imageUrl: stDanilo, description: 'Oh!!! I’m the office manager!!!' },
    { id: 3, name: 'Saint Erica', imageUrl: stErica, description: 'Protector of all deliveries' },
    { id: 4, name: 'Saint Luca', imageUrl: stLuca, description: 'Protector of all requests (Proper and Improper)' },
    { id: 5, name: 'Saint Marcello', imageUrl: stMarcello, description: 'Protector of the drunkards' },
    { id: 6, name: 'Saint Matteo', imageUrl: stMatteo, description: 'Protector of all Salesforce' },
    { id: 7, name: 'Saint Michael', imageUrl: stMichael, description: 'Protector of all business solutions (support specialist at heart)' },
    { id: 8, name: 'Saint Sergio from Bronxl', imageUrl: stSergio, description: 'Protector of the entire internet (or maybe not)' },
    { id: 9, name: 'Saints Andrea, Jacopo, & Fabio', imageUrl: stsAndreaJacopoFabio, description: 'Engineers and protectors of all clouds' },
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCarousel();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    if (isCarouselOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCarouselOpen]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src={logo} alt="HolyK" className="logo" />
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
              <div key={cards[currentIndex].id} className="card-extended">
                <img src={cards[currentIndex].imageUrl} alt={cards[currentIndex].name} className="card-image" />
                <h2>{cards[currentIndex].name}</h2>
                <p>{cards[currentIndex].description}</p>
              </div>
            </div>
            <button className="next-btn" onClick={goToNext}>→</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
