import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";

const AppRoutes: React.FC = () => {
  const [isAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/" element={<Profile />} />
           

          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/" element={<Profile />} />

          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;