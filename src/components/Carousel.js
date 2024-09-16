import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Card from './Card';

const Carousel = ({ cards, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const closeCarousel = () => {
    onClose();
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

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="carousel-overlay" {...handlers}>
      <button className="close-btn" onClick={closeCarousel}>×</button>
      <button className="prev-btn" onClick={goToPrevious}>←</button>
      <div className="carousel-content">
        <Card
          name={cards[currentIndex].name}
          imageUrl={cards[currentIndex].imageUrl}
          description={cards[currentIndex].description}
          className="card-extended"
        />
      </div>
      <button className="next-btn" onClick={goToNext}>→</button>
    </div>
  );
};

export default Carousel;
