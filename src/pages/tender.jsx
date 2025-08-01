import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTenders, getTenderById, getTendersByCategory, getAllCategories } from '../api/tenderapi';

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-4">Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const TenderPage = () => {
  const navigate = useNavigate();
  const [tenders, setTenders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tendersPerPage] = useState(3); // Reduced to 3 to show pagination with 4 tenders

  useEffect(() => {
    fetchTenders();
    fetchCategories();
    
    // Add scroll event listener
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      console.log('Fetched categories:', data);
      setCategories(data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchTenders = async (category = '') => {
    try {
      setLoading(true);
      setError(null);
      let data;
      
      if (category && category !== '') {
        data = await getTendersByCategory(category);
      } else {
        data = await getAllTenders();
      }
      
      console.log('Fetched tenders data:', data); // Debug log
      console.log('Data type:', typeof data); // Debug log
      console.log('Is array:', Array.isArray(data)); // Debug log
      console.log('Data length:', data?.length); // Debug log
      
      // Debug individual tender data
      if (Array.isArray(data)) {
        data.forEach((tender, index) => {
          console.log(`Tender ${index + 1}:`, {
            id: tender.id,
            title: tender.title,
            ReleaseDate: tender.ReleaseDate,
            category: tender.category?.title,
            ApplyNow: tender.ApplyNow,
            documentId: tender.documentId,
            viewdetails: tender.viewdetails,
            hasViewDetails: !!tender.viewdetails,
            viewDetailsType: typeof tender.viewdetails
          });
        });
      }
      
      // Ensure data is an array and validate each item
      if (Array.isArray(data)) {
        // Filter out invalid items
        const validTenders = data.filter(tender => {
          if (!tender || typeof tender !== 'object') {
            console.log('Filtering out invalid tender:', tender);
            return false;
          }
          return true;
        });
        
        console.log('Valid tenders count:', validTenders.length);
        setTenders(validTenders);
      } else if (data && data.data && Array.isArray(data.data)) {
        const validTenders = data.data.filter(tender => {
          if (!tender || typeof tender !== 'object') {
            console.log('Filtering out invalid tender:', tender);
            return false;
          }
          return true;
        });
        
        console.log('Valid tenders count:', validTenders.length);
        setTenders(validTenders);
      } else {
        console.error('Invalid data format:', data);
        setTenders([]);
        setError('Invalid data format received from server');
      }
    } catch (err) {
      setError('Failed to fetch tenders');
      console.error('Error:', err);
      setTenders([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    console.log('Category changed to:', category); // Debug log
    setSelectedCategory(category);
    
    // If "All Categories" is selected, fetch all tenders
    if (category === '') {
      fetchTenders();
    } else {
      fetchTenders(category);
    }
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedStatus('');
    fetchTenders();
  };

  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = searchQuery === '' || 
      (tender.title && tender.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === '' || 
      (tender.category && tender.category.title === selectedCategory);
    const matchesStatus = selectedStatus === '' || 
      (tender.status1 && tender.status1.toLowerCase() === selectedStatus.toLowerCase());
    
    // Debug logging
    if (selectedCategory !== '' || selectedStatus !== '') {
      console.log(`Tender "${tender.title}":`, {
        search: matchesSearch,
        category: matchesCategory,
        status: matchesStatus,
        tenderCategory: tender.category?.title,
        selectedCategory,
        tenderStatus: tender.status1,
        selectedStatus
      });
    }
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Pagination logic
  const indexOfLastTender = currentPage * tendersPerPage;
  const indexOfFirstTender = indexOfLastTender - tendersPerPage;
  const currentTenders = filteredTenders.slice(indexOfFirstTender, indexOfLastTender);
  const totalPages = Math.ceil(filteredTenders.length / tendersPerPage);
  
  // Debug pagination
  console.log('Pagination Debug:', {
    filteredTendersLength: filteredTenders.length,
    tendersPerPage,
    currentPage,
    totalPages,
    indexOfFirstTender,
    indexOfLastTender,
    currentTendersLength: currentTenders.length
  });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedStatus]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleApplyClick = (tenderId) => {
    console.log('Apply clicked for tender:', tenderId);
    
    // Find the tender by ID
    const tender = tenders.find(t => t.id === tenderId);
    console.log('Found tender:', tender);
    
    // Check if tender has an ApplyNow link (note the capital letters)
    if (tender && tender.ApplyNow) {
      console.log('Opening ApplyNow link:', tender.ApplyNow);
      // Open the ApplyNow link in a new tab
      window.open(tender.ApplyNow, '_blank', 'noopener,noreferrer');
    } else {
      console.log('No ApplyNow link found for tender:', tenderId);
      alert('No application link available for this tender.');
    }
  };

  const handleTenderClick = (tenderId) => {
    // Find the tender by ID
    const tender = tenders.find(t => t.id === tenderId);
    console.log('View Details clicked for tender:', tender);
    
    // Check if tender has a document in viewdetails
    if (tender && tender.viewdetails && tender.viewdetails.url) {
      console.log('Opening document directly:', tender.viewdetails.url);
      const documentUrl = `http://localhost:1337${tender.viewdetails.url}`;
      console.log('Document URL:', documentUrl);
      console.log('Document type:', tender.viewdetails.mime);
      
      // Check if it's a PDF or document that can be viewed in browser
      const isViewable = tender.viewdetails.mime && (
        tender.viewdetails.mime.includes('pdf') ||
        tender.viewdetails.mime.includes('text') ||
        tender.viewdetails.mime.includes('image') ||
        tender.viewdetails.mime.includes('html')
      );
      
      // For all documents, open directly in new tab (like PDF)
      console.log('Opening document directly in new tab...');
      window.open(documentUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.log('No document found for tender:', tenderId);
      alert('No document available for this tender.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'TBD';
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const formatDescription = (description) => {
    if (!description) return 'No description available';
    
    // Handle Strapi rich text format
    if (Array.isArray(description)) {
      return description
        .map(item => {
          if (item.type === 'paragraph' && item.children) {
            return item.children
              .map(child => child.text || '')
              .join('');
          }
          return '';
        })
        .join(' ')
        .trim() || 'No description available';
    }
    
    // Handle plain string
    return String(description);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <main>
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-12 px-4 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Tender Management</h1>
              <p className="text-lg text-gray-600 font-normal">Browse and manage all available tenders</p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 mb-6 flex items-end gap-4 flex-wrap shadow-lg w-full">
              <div className="flex flex-col gap-2 flex-2 min-w-[220px]">
                <label className="font-semibold text-gray-800 text-sm mb-1">Search Tenders</label>
                <div className="relative flex items-center">
                  <svg className="absolute left-3 text-gray-500 z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-sm bg-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 placeholder-gray-500"
                    placeholder="Search by tender title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1 min-w-[160px]">
                <label className="font-semibold text-gray-800 text-sm mb-1">Category</label>
                <select 
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  {categories
                    .filter(category => category.title) // Only show categories with titles
                    .map(category => (
                      <option key={category.id} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 flex-1 min-w-[160px]">
                <label className="font-semibold text-gray-800 text-sm mb-1">Status</label>
                <select 
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white cursor-pointer transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
                  value={selectedStatus}
                  onChange={handleStatusChange}
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div className="flex-none">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 border-none rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap shadow-lg hover:from-purple-700 hover:to-purple-800 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Tender Section */}
            <section className="bg-white rounded-xl p-8 shadow-lg mb-8 w-full">
              <div className="mb-8 text-center">
                <h2 className="text-3xl text-gray-800 font-semibold">Available Tenders</h2>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="text-center py-12 text-gray-600">
                  <div className="border-4 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin mx-auto mb-4"></div>
                  <p>Loading tenders...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="text-center py-12">
                  <p className="text-red-500 font-medium mb-4">{error}</p>
                  <button 
                    onClick={() => fetchTenders(selectedCategory)} 
                    className="bg-blue-500 hover:bg-blue-600 text-white border-none px-6 py-3 rounded-lg cursor-pointer font-medium transition-colors duration-300"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Tenders Table */}
              {!loading && !error && (
                <div className="w-full overflow-x-auto">
                  {filteredTenders.length === 0 ? (
                    <div className="text-center py-12 text-gray-600 text-lg">
                      <p>No tenders found matching your search criteria.</p>
                    </div>
                  ) : (
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 flex text-white font-semibold text-sm rounded-t-2xl">
                        <div className="flex-2 min-w-[200px] p-4 text-left">Tender Title</div>
                        <div className="flex-2 min-w-[200px] p-4 text-left">Description</div>
                        <div className="flex-1 min-w-[120px] p-4 text-left">Release Date</div>
                        <div className="flex-[0.8] min-w-[100px] p-4 text-left">Status</div>
                                                 <div className="flex-[1.2] min-w-[150px] p-4 text-left">View Details</div>
                        <div className="flex-1 min-w-[120px] p-4 text-left">Apply</div>
                      </div>
                      <div className="max-h-[600px] overflow-y-auto">
                        {currentTenders.map((tender, index) => {
                          // Validate tender object
                          if (!tender || typeof tender !== 'object') {
                            console.log('Invalid tender object:', tender);
                            return null;
                          }
                          
                          return (
                            <div 
                              key={tender.id || `tender-${index}`} 
                              className={`flex transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50 ${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                              }`}
                            >
                              <div className="flex-2 min-w-[200px] p-4 flex items-center font-semibold text-gray-800">
                                {tender.title ? String(tender.title) : 'Untitled Tender'}
                              </div>
                              <div className="flex-2 min-w-[200px] p-4 flex items-start text-gray-600 leading-relaxed text-left justify-start break-words">
                                {formatDescription(tender.description)}
                              </div>
                              <div className="flex-1 min-w-[120px] p-4 flex items-center font-medium text-gray-700">
                                {formatDate(tender.ReleaseDate)}
                              </div>
                              <div className="flex-[0.8] min-w-[100px] p-4 flex items-center">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block text-center min-w-[80px] ${
                                  tender.status1?.toLowerCase() === 'active' 
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                                    : tender.status1?.toLowerCase() === 'closed'
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                                }`}>
                                  {tender.status1 ? tender.status1.toUpperCase() : 'ACTIVE'}
                                </span>
                              </div>
                              <div className="flex-[1.2] min-w-[150px] p-4 flex items-center">
                                <div className="flex gap-2 flex-wrap">
                                                                     <button 
                                     className="bg-gradient-to-r from-green-500 to-green-600 text-white border-none px-4 py-2 rounded-full cursor-pointer text-xs font-semibold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg"
                                     onClick={() => handleTenderClick(tender.id)}
                                   >
                                     View Details
                                   </button>
                                  {tender.PDF && (
                                    <a 
                                      href={`${tender.PDF}`} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline font-medium text-xs transition-colors duration-200 whitespace-nowrap hover:text-blue-800 hover:no-underline"
                                    >
                                      View PDF
                                    </a>
                                  )}
                                </div>
                              </div>
                              <div className="flex-1 min-w-[120px] p-4 flex items-center">
                                <button 
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-4 py-2 rounded-full cursor-pointer text-xs font-semibold transition-all duration-300 whitespace-nowrap hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
                                  onClick={() => handleApplyClick(tender.id)}
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Pagination */}
              {!loading && !error && filteredTenders.length > 0 && (
                <div className="flex flex-col items-center gap-6 mt-8 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <button 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-none px-6 py-3 rounded-xl cursor-pointer text-sm font-semibold transition-all duration-300 min-w-[100px] shadow-lg relative overflow-hidden hover:from-purple-700 hover:to-purple-800 hover:-translate-y-0.5 hover:shadow-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-70"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-lg">
                      {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        // Show first page, last page, current page, and pages around current page
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              className={`bg-white text-gray-700 border-2 border-gray-200 px-4 py-3 rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300 min-w-[45px] text-center relative overflow-hidden hover:bg-gray-50 hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-lg ${
                                pageNumber === currentPage 
                                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-lg -translate-y-0.5' 
                                  : ''
                              }`}
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return <span key={pageNumber} className="text-gray-500 font-semibold px-3 text-lg">...</span>;
                        }
                        return null;
                      })}
                    </div>
                    
                    <button 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-none px-6 py-3 rounded-xl cursor-pointer text-sm font-semibold transition-all duration-300 min-w-[100px] shadow-lg relative overflow-hidden hover:from-purple-700 hover:to-purple-800 hover:-translate-y-0.5 hover:shadow-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:opacity-70"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
        
        {/* Scroll to top button */}
        {showScrollTop && (
          <button 
            className="fixed bottom-8 right-8 w-12 h-12 bg-gray-200 border-none rounded-full cursor-pointer flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:bg-gray-300 hover:-translate-y-1 before:content-['↑'] before:text-xl before:font-bold before:text-gray-600" 
            onClick={scrollToTop}
            title="Scroll to top"
          >
          </button>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default TenderPage;
