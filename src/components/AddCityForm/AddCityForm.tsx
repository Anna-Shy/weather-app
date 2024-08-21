import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import { addCity, fetchWeather } from "../../redux/weatherSlice";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Add city"
      />

      <button type="submit">Add City</button>
    </form>
  );
};
