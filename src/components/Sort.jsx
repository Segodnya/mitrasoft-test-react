import React from "react";

const Sort = ({ sortOption, setSortOption }) => {
  return (
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="id">Sort by ID</option>
      <option value="title">Sort by Title</option>
    </select>
  );
};

export default Sort;
