import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import '../styles/UnitToggle.css';

const UnitToggle = () => {
  const { unit, toggleUnit } = useWeatherContext();

  return (
    <div className="unit-toggle">
      <span className={unit === 'C' ? 'active' : ''}>°C</span>
      <button className="toggle-button" onClick={toggleUnit}>
        <div className={`toggle-slider ${unit === 'F' ? 'fahrenheit' : 'celsius'}`}></div>
      </button>
      <span className={unit === 'F' ? 'active' : ''}>°F</span>
    </div>
  );
};

export default UnitToggle;
