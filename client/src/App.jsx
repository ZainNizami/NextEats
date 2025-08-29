import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import ReviewForm from "./components/ReviewForm";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className={`layout ${sidebarCollapsed ? "collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <ThemeToggle />
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          {!sidebarCollapsed && <span>NextEats</span>}
        </div>

        {!sidebarCollapsed && (
          <div className="sidebar-placeholder">
            [ login/signup buttons here later ]
          </div>
        )}
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
