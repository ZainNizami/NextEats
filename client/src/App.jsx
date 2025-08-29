import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">🍽️ NextEats</div>
        <div className="sidebar-placeholder">[ login/signup buttons here later ]</div>
      </aside>

      <main className="main-content">
        <h1 className="app-title">Find your next meal</h1>
        <SearchBar onSelect={setSelectedRestaurant} />
        {selectedRestaurant && (
          <ReviewForm selectedRestaurant={selectedRestaurant} />
        )}
      </main>
    </div>
  );
}

export default App;
