import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const searchInfo = {
    searchText,
    setSearchText,
  };
  return (
    <SearchContext.Provider value={searchInfo}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
