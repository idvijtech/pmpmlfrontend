import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PuneDarshan from './pages/puneDarshan';
import Navbar from './components/Navbar';
import './i18n'; // Import i18n configuration

function AppContent() {
  const { t } = useTranslation();
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pune-darshan" element={<div className="max-w-7xl mx-auto px-4 md:px-8"><PuneDarshan /></div>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
