import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import { addCity, fetchWeather } from "../../redux/weatherSlice";

import "./addCityForm.scss";

export const AddCityForm: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addCity(city));
    dispatch(fetchWeather(city));
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="AddCity__form">
      <input
        type="text"
        value={city}
        className="AddCity__form-input"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Add city"
      />

      <button type="submit" className="AddCity__form-btn">
        Add City
      </button>
    </form>
  );
};
