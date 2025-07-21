import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import { getWeatherIcon, convertTemp } from '../utils/weatherUtils';
import '../styles/Forecast.css';

const Forecast = ({ forecast }) => {
  const { unit } = useWeatherContext();

  if (!forecast || !forecast.list) return null;

  const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecasts.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
          
          return (
            <div key={day.dt} className="forecast-item">
              <div className="forecast-day">{dayName}</div>
              <div className="forecast-date">
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="forecast-icon">
                {getWeatherIcon(day.weather[0].icon, 40)}
              </div>
              <div className="forecast-temps">
                <span className="temp-high">
                  {convertTemp(day.main.temp_max, unit)}°
                  <h5>max</h5>
                </span>
                <span className="temp-low">
                  {convertTemp(day.main.temp_min, unit)}°
                  <h5>min</h5>
                </span>
              </div>
              <div className="forecast-description">
                {day.weather[0].main}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
