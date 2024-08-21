import React, { useState } from "react";

import { AddCityForm } from "../../components/AddCityForm/AddCityForm";
import { CityList } from "../../components/CityList/CityList";
import { CitySearch } from "../../components/CitySearch/CitySearch";

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="HomePage">
      <AddCityForm />
      <CitySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CityList searchQuery={searchQuery} />
    </div>
  );
};
