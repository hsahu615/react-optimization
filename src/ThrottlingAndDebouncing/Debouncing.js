import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");

  const handleSearch = useCallback(
    debounce((term) => {
      setDisplayTerm(term);
    }, 500), // Debounced to execute 500ms after the user stops typing
    []
  );

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search"
      />
      <p>Search results for: {displayTerm}</p>
    </div>
  );
};

export default Debouncing;
