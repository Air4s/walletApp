import axios from 'axios';

// Set up your local API base URL
const baseURL = 'http://localhost:8080';

// Create an instance of axios with a baseURL
const mainApi = axios.create({
  baseURL,
});

export default mainApi;
