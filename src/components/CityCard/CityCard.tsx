import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AppDispatch } from "../../redux/store";

import { fetchWeather, removeCity } from "../../redux/weatherSlice";

interface CityCardProps {
  city: string;
  weather: any;
}

export const CityCard: React.FC<CityCardProps> = ({ city, weather }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(fetchWeather(city));
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeCity(city));
  };

  const handleCardClick = () => {
    navigate(`/citydetails/${city}`);
  };

  return (
    <div className="city__card" onClick={handleCardClick}>
      <h3>{city}</h3>

      <p>{weather?.main?.temp}°C</p>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
