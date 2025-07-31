import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTenders, getTenderById, getTendersByCategory, getAllCategories } from '../api/tenderapi';
import './tender.css';

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
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page to try again.</p>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
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
      <div className="tender-page">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <h2>PMPML</h2>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#tenders" className="nav-link active">Tenders</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
            <div className="nav-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <div className="container">
            {/* Header Section */}
            <div className="header-section">
              <h1 className="page-title">Tender Management</h1>
              <p className="page-subtitle">Browse and manage all available tenders</p>
            </div>

                      {/* Search and Filter Section */}
          <div className="search-filter-section">
            <div className="search-container">
              <label className="search-label">Search Tenders</label>
              <div className="search-input-wrapper">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by tender title..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="filter-container">
              <label className="filter-label">Category</label>
              <select 
                className="filter-select" 
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

            <div className="filter-container">
              <label className="filter-label">Status</label>
              <select 
                className="filter-select" 
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>

            <div className="clear-filters-container">
              <button 
                className="clear-filters-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Tender Section */}
          <section className="tender-section">
            <div className="section-header">
              <h2>Available Tenders</h2>
            </div>

              {/* Loading State */}
              {loading && (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p>Loading tenders...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="error-container">
                  <p className="error-message">{error}</p>
                  <button onClick={() => fetchTenders(selectedCategory)} className="retry-btn">
                    Retry
                  </button>
                </div>
              )}

                          {/* Tenders Table */}
            {!loading && !error && (
              <div className="tenders-table-container">
                {filteredTenders.length === 0 ? (
                  <div className="no-tenders">
                    <p>No tenders found matching your search criteria.</p>
                  </div>
                ) : (
                    <div className="tenders-table">
                      <div className="table-header">
                        <div className="header-cell">Tender Title</div>
                        <div className="header-cell">Description</div>
                        <div className="header-cell">Release Date</div>
                        <div className="header-cell">Status</div>
                        <div className="header-cell">View Document</div>
                        <div className="header-cell">Apply</div>
                      </div>
                                          <div className="table-body">
                      {currentTenders.map((tender, index) => {
                          // Validate tender object
                          if (!tender || typeof tender !== 'object') {
                            console.log('Invalid tender object:', tender);
                            return null;
                          }
                          
                          return (
                            <div 
                              key={tender.id || `tender-${index}`} 
                              className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
                            >
                              <div className="table-cell tender-title">
                                {tender.title ? String(tender.title) : 'Untitled Tender'}
                              </div>
                              <div className="table-cell tender-description">
                                {formatDescription(tender.description)}
                              </div>
                              <div className="table-cell tender-release-date">
                                {formatDate(tender.ReleaseDate)}
                              </div>
                                                        <div className="table-cell tender-status">
                            <span className={`status-badge ${tender.status1 ? tender.status1.toLowerCase() : 'active'}`}>
                              {tender.status1 ? tender.status1.toUpperCase() : 'ACTIVE'}
                            </span>
                          </div>
                              <div className="table-cell tender-actions">
                                <button 
                                  className="view-details-btn"
                                  onClick={() => handleTenderClick(tender.id)}
                                >
                                  View Document
                                </button>
                                {tender.PDF && (
                                  <a 
                                    href={`${tender.PDF}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="document-link"
                                  >
                                    View PDF
                                  </a>
                                )}
                              </div>
                              <div className="table-cell tender-apply">
                                <button 
                                  className="apply-btn"
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
                <div className="pagination-container">
                  <div className="pagination-controls">
                    <button 
                      className="pagination-btn"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    
                    <div className="page-numbers">
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
                              className={`page-btn ${pageNumber === currentPage ? 'active' : ''}`}
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return <span key={pageNumber} className="page-ellipsis">...</span>;
                        }
                        return null;
                      })}
                    </div>
                    
                    <button 
                      className="pagination-btn"
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
            className="scroll-to-top" 
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
