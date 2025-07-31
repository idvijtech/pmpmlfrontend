import React, { useState, useEffect } from 'react';
//import './PDFViewer.css';

const PDFViewer = ({ pdfUrl, fileName, onClose, fileType }) => {
  const [documentContent, setDocumentContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDocumentContent();
  }, [pdfUrl]);

  const fetchDocumentContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch the document content
      const response = await fetch(pdfUrl);
      
      if (response.ok) {
        // For text-based documents, try to read as text
        if (fileType && (fileType.includes('text') || fileType.includes('odt') || fileType.includes('doc'))) {
          const text = await response.text();
          setDocumentContent(text);
        } else {
          // For other files, show download option
          setDocumentContent('Document loaded successfully. Click download to save.');
        }
      } else {
        throw new Error('Failed to fetch document');
      }
    } catch (err) {
      console.error('Error fetching document:', err);
      setError('Could not load document content. Please try downloading the file.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pdf-viewer-overlay">
      <div className="pdf-viewer-container">
        <div className="pdf-viewer-header">
          <h2>📄 {fileName}</h2>
          <div className="header-actions">
            <button className="download-btn" onClick={handleDownload}>
              📥 Download
            </button>
            <button className="close-btn" onClick={onClose}>
              ✕ Close
            </button>
          </div>
        </div>
        <div className="pdf-viewer-content">
          {loading ? (
            <div className="loading-content">
              <div className="loading-spinner"></div>
              <p>Loading document...</p>
            </div>
          ) : error ? (
            <div className="error-content">
              <p>{error}</p>
              <button className="download-btn" onClick={handleDownload}>
                Download Document
              </button>
            </div>
          ) : fileType && fileType.includes('pdf') ? (
            <iframe 
              src={pdfUrl} 
              width="100%" 
              height="100%" 
              title={fileName}
              frameBorder="0"
            />
          ) : (
            <div className="document-content">
              <div className="content-header">
                <h3>Document Content</h3>
                <button className="download-btn" onClick={handleDownload}>
                  Download Original File
                </button>
              </div>
              <div className="content-body">
                <pre>{documentContent}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer; 