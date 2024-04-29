import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext(null); // Provides null if context is not found

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
