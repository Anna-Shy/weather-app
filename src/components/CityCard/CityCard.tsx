import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AppDispatch } from "../../redux/store";

import { fetchWeather, removeCity } from "../../redux/weatherSlice";

import "./cityCard.scss";

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
    <div className="CityCard" onClick={handleCardClick}>
      <h3 className="CityCard__title">{city}</h3>

      <p className="CityCard__text">{weather?.main?.temp}°F</p>

      <button
        onClick={handleUpdate}
        className="CityCard__btn CityCard__btn-green"
      >
        Update
      </button>
      <button
        onClick={handleRemove}
        className="CityCard__btn CityCard__btn-red"
      >
        Remove
      </button>
    </div>
  );
};
