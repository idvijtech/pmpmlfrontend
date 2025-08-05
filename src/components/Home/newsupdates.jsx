import React, { useState, useEffect } from 'react';
import { getNewsUpdates } from '../../api/newsapi';
import BASE_URL from '../../config/urlconfig';
import { useTranslation } from 'react-i18next';

const NewsUpdates = () => {
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNewsUpdates = async () => {
      try {
        setLoading(true);
        const data = await getNewsUpdates();
        setNewsUpdates(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsUpdates();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">{t('news.newsAndUpdates')}</h2>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading news updates...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">Error loading news updates: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsUpdates && newsUpdates.length > 0 ? (
              newsUpdates.map((news, index) => {
                console.log('Rendering news item:', news);
                return (
                  <div key={news.id} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100">
                    {/* Image Section */}
                    <div className="h-56 relative overflow-hidden">
                      {news.Image?.url ? (
                        <img 
                          src={`${BASE_URL}${news.Image.url}`}
                          alt={news.tittle || 'News Image'}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                          <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                          </svg>
                        </div>
                      )}
                      
                      {/* Breaking News Badge */}
                      {news.Tag && news.Tag.toLowerCase().includes('breaking') && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🔥 BREAKING
                        </div>
                      )}
                      
                      {/* Date Badge */}
                      {news.createdAt && (
                        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {new Date(news.createdAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section - Removed since only image field exists */}
                    <div className="p-4">
                      <div className="flex justify-center">
                        {/* View Details Button */}
                        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200">
                          View Details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-600">No news updates available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsUpdates; 