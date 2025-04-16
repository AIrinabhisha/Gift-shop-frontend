import React from 'react';
import './customized.css';  // Import CSS for styling

const Customized = ({ giftName, giftPrice, giftDetails, imageUrl, onAddToCart, onPayNow }) => {
  return (
    <div className="gift-card">
      <img src={imageUrl} alt={giftName} className="gift-image" />
      <div className="gift-content">
        <h3 className="gift-name">{giftName}</h3>
        <h4>{giftPrice}</h4>
        <p className="gift-details">{giftDetails}</p>
        <div className="gift-buttons">
          <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
          <button className="pay-now" onClick={onPayNow}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Customized;
