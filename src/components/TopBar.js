import React from 'react';
import logo from '../assets/images/logo.png';

function TopBar() {
  return (
    <header className="App-header">
      <div className="top-bar">
        <img src={logo} alt="HolyK" className="logo" />
      </div>
    </header>
  );
}

export default TopBar;
