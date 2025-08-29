import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult.jsx";

export default function SearchResultsList({ results = [], onSelect, onSelectRestaurant }) {
  const handle = onSelect || onSelectRestaurant; // support either prop name
  if (!results.length) return null;
  return (
    <div className="results-list">
      {results.map((item) => (
        <SearchResult key={item.id} result={item} onClick={() => handle?.(item)} />
      ))}
    </div>
  );
}
