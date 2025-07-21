import React from 'react';
import { MapPin } from 'lucide-react';
import '../styles/LocationButton.css';

const LocationButton = ({ onLocationSearch, isLoading }) => {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationSearch(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          alert('Location access denied or unavailable. Please search by city name.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <button 
      className="location-button" 
      onClick={handleLocationClick}
      disabled={isLoading}
    >
      <MapPin size={20} />
      Use My Location
    </button>
  );
};

export default LocationButton;