import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import SearchResultsList from "./SearchResultsList.jsx";

export default function SearchBar({ onSelect }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const controllerRef = useRef(null);

  useEffect(() => {
    const q = input.trim();
    if (q.length < 3) { setResults([]); return; }

    const id = setTimeout(async () => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      console.log("Fetching for:", q);
      try {
        const resp = await fetch(`/api/search?term=${encodeURIComponent(q)}&location=Toronto`, { signal: controller.signal });
        if (!resp.ok) { console.error("API error:", resp.status, await resp.text()); setResults([]); return; }
        const data = await resp.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (e) {
        if (e.name !== "AbortError") console.error("Network error:", e);
        setResults([]);
      }
    }, 350);

    return () => clearTimeout(id);
  }, [input]);

  const handleSelect = (r) => { onSelect?.(r); setInput(r.name); setResults([]); };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <span id="search-icon">🔍</span>
        <input
          placeholder="Search restaurants..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <SearchResultsList results={results} onSelect={handleSelect} />
    </div>
  );

}
