import axios from "axios";

// Set up your local API base URL

//const baseURL = "http://localhost:8080";  // <-- local db set up
const baseURL = "http://192.168.1.10:5432"; // <-- serverless db set up

// Create an instance of axios with a baseURL
const mainApi = axios.create({
  baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default mainApi;
