// Tender API functions for handling tender-related operations

const API_BASE_URL = 'http://localhost:1337/api';

/**
 * Get all tenders from the API
 * @returns {Promise<Array>} Array of tender objects
 */
export const getAllTenders = async () => {
  try {
    console.log('Fetching tenders from:', `${API_BASE_URL}/tenders?populate[category]=true&populate[viewdetails]=true`); // Debug log
    
    const response = await fetch(`${API_BASE_URL}/tenders?populate[category]=true&populate[viewdetails]=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('Response status:', response.status); // Debug log

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Raw API response:', result); // Debug log
    
    // Handle Strapi response format
    if (result.data && Array.isArray(result.data)) {
      // Return the data array directly since fields are not wrapped in attributes
      return result.data;
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching tenders:', error);
    throw error;
  }
};

/**
 * Get tenders by category
 * @param {string} category - The category to filter by
 * @returns {Promise<Array>} Array of tender objects filtered by category
 */
export const getTendersByCategory = async (category) => {
  try {
    console.log('Fetching tenders by category:', category);
    
    // First get all tenders with category population
    const response = await fetch(`${API_BASE_URL}/tenders?populate[category]=true&populate[viewdetails]=true&populate[ApplyNow]=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Category filtered response:', result);
    
    if (result.data && Array.isArray(result.data)) {
      // Filter tenders by category title
      const filteredTenders = result.data.filter(tender => {
        const categoryTitle = tender.category?.title;
        console.log(`Tender "${tender.title}" has category: "${categoryTitle}", looking for: "${category}"`);
        return categoryTitle === category;
      });
      
      console.log(`Found ${filteredTenders.length} tenders for category "${category}"`);
      return filteredTenders;
    }
    
    return [];
  } catch (error) {
    console.error(`Error fetching tenders by category ${category}:`, error);
    throw error;
  }
};

/**
 * Get all categories from the API
 * @returns {Promise<Array>} Array of category objects
 */
export const getAllCategories = async () => {
  try {
    console.log('Fetching categories from:', `${API_BASE_URL}/categories`);
    
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Categories response:', result);
    
    if (result.data && Array.isArray(result.data)) {
      console.log('Returning categories directly:', result.data);
      return result.data;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Get a specific tender by ID
 * @param {string|number} tenderId - The ID of the tender to fetch
 * @returns {Promise<Object>} Tender object
 */
export const getTenderById = async (tenderId) => {
  try {
    console.log(`Fetching tender by ID: ${tenderId}`);
    
    // First try to fetch the specific tender
    const response = await fetch(`${API_BASE_URL}/tenders/${tenderId}?populate[category]=true&populate[viewdetails]=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log(`Response status for tender ${tenderId}:`, response.status);

    if (response.ok) {
      const result = await response.json();
      console.log(`Tender ${tenderId} data:`, result);
      
      if (result.data) {
        console.log(`Found tender ${tenderId}:`, result.data);
        return result.data;
      }
    } else {
      console.log(`Direct fetch failed for tender ${tenderId}, trying fallback method...`);
      
      // Fallback: fetch all tenders and find the specific one
      const fallbackResponse = await fetch(`${API_BASE_URL}/tenders?populate[category]=true&populate[viewdetails]=true`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!fallbackResponse.ok) {
        throw new Error(`HTTP error! status: ${fallbackResponse.status}`);
      }

      const fallbackResult = await fallbackResponse.json();
      console.log(`Fallback - All tenders data:`, fallbackResult);
      
      if (fallbackResult.data && Array.isArray(fallbackResult.data)) {
        const tender = fallbackResult.data.find(t => t.id === parseInt(tenderId));
        if (tender) {
          console.log(`Found tender ${tenderId} via fallback:`, tender);
          return tender;
        } else {
          throw new Error(`Tender with ID ${tenderId} not found`);
        }
      }
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error(`Error fetching tender ${tenderId}:`, error);
    throw error;
  }
};
