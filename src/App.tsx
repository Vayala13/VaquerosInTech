// src/App.tsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./components/Routes";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

// Main App component that renders the Header and Routes
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Sidebar />
      <Home />
     
    </div>
  );
};

export default App;