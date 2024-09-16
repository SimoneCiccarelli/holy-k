import React from 'react';

const Card = ({ name, imageUrl, description, onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imageUrl} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
