import axios from 'axios';
import BASE_URL from '../config/urlconfig';

const API_BASE_URL = `${BASE_URL}/api`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const getNewsUpdates = async () => {
  try {
    const response = await api.get('/newsupdates?populate=Image');
    console.log('Raw API Response:', response.data); // Debug log
    return response.data.data;
  } catch (error) {
    console.error('Error fetching news updates:', error);
    throw error;
  }
};

export const getNewsUpdateById = async (id) => {
  try {
    const response = await api.get(`/newsupdates/${id}?populate=Image`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching news update:', error);
    throw error;
  }
}; 