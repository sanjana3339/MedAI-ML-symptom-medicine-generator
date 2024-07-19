import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SignInPage from "./Components/signinpage";
import MHome from "./ml/Home";
import After from "./ml/After";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/medicine" element={<MHome/>} />
          <Route path="/after" element={<After />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
