import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo'; // Adjust the path if necessary
import './weatherInfo_css.scss'; // Make sure to update the path if necessary

const WeatherSearch = ({ onClose }) => { // Ensure onClose is destructured correctly
  const [location, setLocation] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="weather-search-overlay">
      <div className="weather-search-content">
        <h1>Weather Information</h1>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
        <WeatherInfo location={location} />
        <button className="close-button" onClick={() => {
          if (typeof onClose === 'function') { // Check if onClose is a function
            onClose();
          } else {
            console.error('onClose prop is not a function');
          }
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
