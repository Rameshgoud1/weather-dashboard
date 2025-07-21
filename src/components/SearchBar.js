
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          className="search-input"
        />
      </div>
      <button 
        type="button" 
        onClick={handleSubmit} 
        disabled={isLoading || !city.trim()} 
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;