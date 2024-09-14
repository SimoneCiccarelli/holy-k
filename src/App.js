import React from 'react';
import './App.css';

function App() {
  const cards = [
    { id: 1, name: 'Card 1', imageUrl: 'https://via.placeholder.com/150', description: 'Descrizione 1' },
    { id: 2, name: 'Card 2', imageUrl: 'https://via.placeholder.com/150', description: 'Descrizione 2' },
    { id: 3, name: 'Card 3', imageUrl: 'https://via.placeholder.com/150', description: 'Descrizione 3' },
    // Aggiungi più figurine qui
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <img src="https://via.placeholder.com/100x50" alt="HolyK Logo" className="logo" />
          <h1>HolyK Figurine Collection</h1>
        </div>
      </header>
      <main>
        <div className="cards-table">
          {cards.map(card => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} alt={card.name} className="card-image" />
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
