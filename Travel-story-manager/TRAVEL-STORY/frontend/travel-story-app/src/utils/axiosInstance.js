import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travel-story-6v54.onrender.com", // Update if using a different server
});




// Attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
