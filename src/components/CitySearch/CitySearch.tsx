import React from "react";

interface CitySearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const CitySearch: React.FC<CitySearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="city__search">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a city..."
      />
    </div>
  );
};
