import React from "react";
import "./SearchResult.css";

export default function SearchResult({ result, onClick }) {
  return (
    <div className="search-result" onClick={onClick}>
      <div className="name">{result.name}</div>
      <div className="meta">{result.rating}★ {result.location?.city ? `· ${result.location.city}` : ""}</div>
    </div>
  );
}
