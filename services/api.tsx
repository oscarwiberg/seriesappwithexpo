import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

export const searchSeries = (query: string) => {
  return axios.get(`${API_BASE_URL}/search/shows?q=${query}`);
};