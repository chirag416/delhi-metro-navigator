import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FindRoute from "./pages/FindRoute.jsx";
import NetworkMap from "./pages/NetworkMap.jsx";
import About from "./pages/About.jsx";




const App = () => {
  const BASE_URL="https://amazing-fudge-c1aa9e.netlify.app"

  return (
    <div data-theme="dark">
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-route" element={<FindRoute />} />
            <Route path="/network-map" element={<NetworkMap />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;