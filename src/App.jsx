import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TenderPage from './pages/tender';
import PuneDarshan from './pages/puneDarshan';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <div className="w-full">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Routes>
              <Route path="/" element={<TenderPage />} />
              <Route path="/tenders" element={<TenderPage />} />
              <Route path="/pune-darshan" element={<PuneDarshan />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
