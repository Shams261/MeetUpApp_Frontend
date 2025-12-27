import axios from "axios";

// const API_URL = "http://localhost:3000/api/events"; Localhost URL
const API_URL = "https://meet-up-app-backend-three.vercel.app/api/events"; // your backend URL

export const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
