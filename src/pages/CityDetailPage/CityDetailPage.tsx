import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

export const CityDetailPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const weather = city
    ? useSelector((state: RootState) => state.weather.weatherData[city])
    : undefined;

  return (
    <div className="CityDetailPage">
      <h2>{city}</h2>
      {weather ? (
        <>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
