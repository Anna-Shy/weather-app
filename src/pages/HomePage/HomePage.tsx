import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AddCityForm } from "../../components/AddCityForm/AddCityForm";
import { CityList } from "../../components/CityList/CityList";
import { CitySearch } from "../../components/CitySearch/CitySearch";

import "./homePage.scss";

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="HomePage">
      <header className="HomePage__header">
        <Link to={"/"}>
          <h2 className="CityDetailPage__header-title">
            <i className="icon fas fa-cloud-sun"></i>
            Weather
          </h2>
        </Link>
        <CitySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>

      <main className="HomePage__main">
        <AddCityForm />
        <CityList searchQuery={searchQuery} />
      </main>
    </div>
  );
};
