import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./Page/Profile";
import About from "./Page/About";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="body-app">
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} exact/>
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
