import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './saved.css';

const SavedFavorites = ({ onClose }) => {
  const [favorites, setFavorites] = useState([]);

  // Retrieve favorites from localStorage when component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const color = { color: '#195f80' };
  return (
    <div className="saved-favorites-overlay">
      <div className="saved-favorites-content">
        <h2 style={color}>Your Saved Favorites</h2>
        <button className="close-button" onClick={() => {
          if (typeof onClose === 'function') { // Check if onClose is a function
            onClose();
          } else {
            console.error('onClose prop is not a function');
          }
        }}>
          Close
        </button>
        <ul>
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <li key={favorite.offerId} className="favorite-item">
              <img src={favorite.imgSrc} alt={favorite.city} className="favorite-image" />
              <div className="favorite-details">
                <p>{favorite.city}</p>
                <p>Price: {favorite.price}</p>
                <p>Discount: {favorite.discount}</p>
                <p>Location: {favorite.location}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No favorites saved.</p>
        )}

        </ul>
      </div>
    </div>
  );
};

// Add prop types validation
SavedFavorites.propTypes = {
  onClose: PropTypes.func.isRequired, // Validate onClose as a required function
};

export default SavedFavorites;
