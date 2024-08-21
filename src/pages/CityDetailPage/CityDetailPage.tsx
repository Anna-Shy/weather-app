import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchWeather, fetchHourlyWeather } from "../../redux/weatherSlice";

import { TemperatureChart } from "../../components/TemperatureChart/TemperatureChart";

import "./cityDetailPage.scss";

export const CityDetailPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const dispatch: AppDispatch = useDispatch();
  const weather = city
    ? useSelector((state: RootState) => state.weather.weatherData[city])
    : undefined;

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
      dispatch(fetchHourlyWeather(city));
    }
  }, [city, dispatch]);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="CityDetailPage">
      <header className="CityDetailPage__header">
        <Link to={"/"}>
          <h2 className="CityDetailPage__header-title">
            <i className="icon fas fa-cloud-sun"></i>
            Weather
          </h2>
        </Link>
      </header>

      <main className="CityDetailPage__main">
        <h2 className="CityDetailPage__main-title">{city}</h2>

        {weather ? (
          <>
            <p className="CityDetailPage__main-text">
              Temperature: {weather.main.temp}°F
            </p>
            <p className="CityDetailPage__main-text">
              Humidity: {weather.main.humidity}%
            </p>
            <p className="CityDetailPage__main-text">
              Wind Speed: {weather.wind.speed} m/s
            </p>
            <p className="CityDetailPage__main-text">
              Weather: {weather.weather[0].description}
            </p>
            <p className="CityDetailPage__main-text">
              Last Updated: {formatDate(weather.dt)}
            </p>
            {weather.hourlyForecast && (
              <TemperatureChart hourlyData={weather.hourlyForecast || []} />
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};
