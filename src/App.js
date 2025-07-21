import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import LocationButton from './components/LocationButton';
import UnitToggle from './components/UnitToggle';
import LoadingSpinner from './components/LoadingSpinner';
import { WeatherProvider } from './context/WeatherContext';
import { Cloud } from 'lucide-react';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'a418523e84e9f2a445ef1ba2d26565df'; 

  const fetchWeatherByCity = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }
      
      const weatherData = await weatherResponse.json();
      
      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      const forecastData = await forecastResponse.json();
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError('');
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      const weatherData = await weatherResponse.json();
      
      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      const forecastData = await forecastResponse.json();
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('Unable to fetch weather data');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherProvider>
      <div className="app">
        <div className="app-container">
          <header className="app-header">
            <h1>Weather Forecast</h1>
            <UnitToggle />
          </header>

          <div className="search-section">
            <SearchBar onSearch={fetchWeatherByCity} isLoading={loading} />
            <LocationButton onLocationSearch={fetchWeatherByCoords} isLoading={loading} />
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          {loading && <LoadingSpinner />}

          {!loading && weather && (
            <div className="weather-content">
              <WeatherDisplay weather={weather} />
              <Forecast forecast={forecast} />
            </div>
          )}

          {!loading && !weather && !error && (
            <div className="welcome-message">
              <Cloud size={64} />
              <p>Search for a city or use your location to get started!</p>
            </div>
          )}
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;