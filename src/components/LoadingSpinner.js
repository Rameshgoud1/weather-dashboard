import React from 'react';
import { Loader } from 'lucide-react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Loader className="spinner-icon" size={32} />
    <p>Loading weather data...</p>
  </div>
);

export default LoadingSpinner;
