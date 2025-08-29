import React, { useEffect, useState } from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

export default function SearchResultsList({ results = [], onSelect }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (results.length > 0) {
      // trigger animation next tick
      const t = setTimeout(() => setShow(true), 0);
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [results]);

  if (!results || results.length === 0) return null;

  return (
    <div className={`results-list ${show ? "show" : ""}`}>
      {results.map((r) => (
        <SearchResult key={r.id} result={r} onClick={() => onSelect?.(r)} />
      ))}
    </div>
  );
}
