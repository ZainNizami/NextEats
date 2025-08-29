import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <h1 className="app-title">NextEats</h1>
        <SearchBar onSelect={setSelectedRestaurant} />
        {selectedRestaurant && (
          <ReviewForm selectedRestaurant={selectedRestaurant} />
        )}
      </div>
    </div>
  );
}

export default App;
