import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Eye } from 'lucide-react';

// Weather icons mapping
export const getWeatherIcon = (code, size = 48) => {
  const iconMap = {
    '01d': Sun, '01n': Sun,
    '02d': Cloud, '02n': Cloud,
    '03d': Cloud, '03n': Cloud,
    '04d': Cloud, '04n': Cloud,
    '09d': CloudRain, '09n': CloudRain,
    '10d': CloudRain, '10n': CloudRain,
    '11d': CloudLightning, '11n': CloudLightning,
    '13d': CloudSnow, '13n': CloudSnow,
    '50d': Eye, '50n': Eye
  };
  
  const IconComponent = iconMap[code] || Cloud;
  return <IconComponent size={size} />;
};

// Temperature conversion utilities
export const convertTemp = (temp, toUnit) => {
  if (toUnit === 'F') {
    return Math.round((temp * 9/5) + 32);
  }
  return Math.round(temp);
};