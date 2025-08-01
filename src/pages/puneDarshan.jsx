import React from 'react';
import Navbar from '../components/Navbar';

const PuneDarshan = () => {
  return (
    <div className="min-h-screen bg-gray-150">
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="header-section mb-8">
            <h1 className="page-title text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pune Darshan
            </h1>
            <p className="page-subtitle text-xl text-gray-600">
              Content coming soon...
            </p>
          </div>

          {/* Main Content Area - Same structure as Tender page */}
          <section className="tender-section">
            <div className="section-header mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Welcome to Pune</h2>
            </div>
            
            {/* Content will go here */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 text-lg">
                This page will contain Pune Darshan content similar to the Tender page layout.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PuneDarshan; 