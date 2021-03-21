import React from 'react';
import './card.css'

const Card = ({children, required, title}) => {
  return (
    <div className="card_container">
      <div className="children_container">
      {!required && <h2>{title}</h2>}
      {
        required && (
          <span className="requiredTitle">
            <h2>{title}</h2>
            <p className="required">*</p>
        </span>)
      }
      {children}
      </div>
    </div>
  );
}

export default Card;
