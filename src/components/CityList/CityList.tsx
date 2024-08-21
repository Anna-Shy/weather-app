// CityList.tsx
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { CityCard } from "../CityCard/CityCard";

import "./cityList.scss";

interface CityListProps {
  searchQuery: string;
}

export const CityList: React.FC<CityListProps> = ({ searchQuery }) => {
  const cities = useSelector((state: RootState) => state.weather.cities);
  const weatherData = useSelector(
    (state: RootState) => state.weather.weatherData,
  );

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="CityList">
      {filteredCities.map((city) => (
        <CityCard key={city} city={city} weather={weatherData[city]} />
      ))}
    </div>
  );
};
