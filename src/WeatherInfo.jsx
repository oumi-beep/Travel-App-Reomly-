import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weatherInfo_css.scss';

const WeatherInfo = ({ location }) => { 
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (location) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7790bab929c3ac5655f248706dbd917c&units=metric`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [location]);

  return (
    <div className="weather-info">
      
      {weather ? (
        <div className="weather-info__details">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p className="weather-info__no-data">Select a location to see weather details.</p>
      )}
    </div>
  );
};

export default WeatherInfo;
