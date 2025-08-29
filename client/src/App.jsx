import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="App" style={{ paddingTop: "100px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>NextEats</h1>
      <SearchBar onSelect={setSelectedRestaurant} />
      {selectedRestaurant && (
        <ReviewForm selectedRestaurant={selectedRestaurant} />
      )}
    </div>
  );
}

export default App;
