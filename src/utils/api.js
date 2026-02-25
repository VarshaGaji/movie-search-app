import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const res = await axios.get(BASE_URL, {
    params: { s: query, page, apikey: API_KEY }
  });
  return res.data;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(BASE_URL, {
    params: { i: id, apikey: API_KEY }
  });
  return res.data;
};