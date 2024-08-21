import React from "react";

import "./citySearch.scss";

interface CitySearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const CitySearch: React.FC<CitySearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="CitySearch">
      <input
        type="text"
        value={searchQuery}
        className="CitySearch__input"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a city..."
      />
    </div>
  );
};
