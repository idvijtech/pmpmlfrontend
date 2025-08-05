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

export const getGalleryImages = async () => {
  try {
    const response = await api.get('/gallaries?populate=media');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getGalleryImageById = async (id) => {
  try {
    const response = await api.get(`/gallaries/${id}?populate=media`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    throw error;
  }
}; 