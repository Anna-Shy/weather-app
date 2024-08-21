import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_KEY = "a4e052790591b22f0f200483df3af79f";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

const savedCities = JSON.parse(localStorage.getItem("cities") || "[]");
const savedWeatherData = JSON.parse(
  localStorage.getItem("weatherData") || "{}",
);

interface WeatherState {
  cities: string[];
  weatherData: { [key: string]: any };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WeatherState = {
  cities: savedCities,
  weatherData: savedWeatherData,
  status: "idle",
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`,
    );
    return response.data;
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
      localStorage.setItem("cities", JSON.stringify(state.cities));
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
      localStorage.setItem("cities", JSON.stringify(state.cities));
      localStorage.setItem("weatherData", JSON.stringify(state.weatherData));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData[action.payload.name] = action.payload;

        localStorage.setItem("weatherData", JSON.stringify(state.weatherData));
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addCity, removeCity } = weatherSlice.actions;

export default weatherSlice.reducer;
