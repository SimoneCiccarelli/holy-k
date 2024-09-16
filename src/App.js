import React, { useState, useEffect } from 'react';

import './App.css';

import TopBar from './components/TopBar';
import CardTable from './components/CardTable';
import Carousel from './components/Carousel';

import { cards } from './cards';

function App() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div className="App">
      <TopBar />
      <main>
        <CardTable cards={cards} openCarousel={openCarousel} />

        {isCarouselOpen && (
          <Carousel
            cards={cards}
            initialIndex={currentIndex}
            onClose={closeCarousel}
          />
        )}
      </main>
    </div>
  );
}

export default App;
