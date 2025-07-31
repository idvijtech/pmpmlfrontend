import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TenderPage from './pages/tender';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TenderPage />} />
          <Route path="/tenders" element={<TenderPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
