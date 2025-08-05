import React, { useState, useEffect } from 'react';
import { getGalleryImages } from '../../api/galleryapi';
import BASE_URL from '../../config/urlconfig';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const data = await getGalleryImages();
        setGalleryImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">{t('gallery.gallery')}</h2>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">Error: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages?.map((gallery) => {
              const imageUrl = gallery.media?.[0]?.url ? `${BASE_URL}${gallery.media[0].url}` : null;
              
              return (
                <div key={gallery.id} className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Gallery"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">No Image</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
