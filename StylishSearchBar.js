import React, { useState } from 'react';
import './App.css'; // Import the external stylesheet

const StylishSearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Pass the search query to the parent component or perform the search logic here
    onSearch(searchQuery);
  };

  return (
    <form className="stylish-search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default StylishSearchBar;