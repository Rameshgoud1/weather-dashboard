import React from 'react';
import { MapPin, Thermometer, Droplets, Wind, Eye } from 'lucide-react';
import { useWeatherContext } from '../context/WeatherContext';
import { getWeatherIcon, convertTemp } from '../utils/weatherUtils';
import '../styles/WeatherDisplay.css';

const WeatherDisplay = ({ weather }) => {
  const { unit } = useWeatherContext();

  if (!weather) return null;

  return (
    <div className="weather-display">
      <div className="weather-header">
        <div className="weather-location">
          <MapPin size={16} />
          <h2>{weather.name},{weather.sys.country}</h2>
        </div>
        <div className="weather-main">
          <div className="weather-icon-large">
            {getWeatherIcon(weather.weather[0].icon, 80)}
          </div>
          <div className="weather-temp-main">
            <span className="temperature-large">
              {convertTemp(weather.main.temp, unit)}°{unit}
            </span>
            <p className="weather-description">{weather.weather[0].description}</p>
          </div>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="weather-detail-item">
          <Thermometer size={20} />
          <span>Feels like</span>
          <span>{convertTemp(weather.main.feels_like, unit)}°{unit}</span>
        </div>
        <div className="weather-detail-item">
          <Droplets size={20} />
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="weather-detail-item">
          <Wind size={20} />
          <span>Wind Speed</span>
          <span>{weather.wind.speed} m/s</span>
        </div>
        <div className="weather-detail-item">
          <Eye size={20} />
          <span>Visibility</span>
          <span>{weather.visibility / 1000} km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
