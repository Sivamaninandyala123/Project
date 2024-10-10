import React from 'react';
import './CardComponent.css'; // Create a CSS file for card-specific styles

const CardComponent = ({ icon, title, subtitle, description, time, tag }) => {
  return (
    <div className="card">
      <div className="card-header">
        <i className={`fas fa-${icon}`}></i>
        <span className="card-title">{title}</span>
        <span className="card-time">{time}</span>
      </div>
      <div className="card-body">
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-tag">{tag}</span>
      </div>
    </div>
  );
};

export default CardComponent;
