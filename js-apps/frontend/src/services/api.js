import axios from 'axios';

const token = window.localStorage.getItem('access_token');

let api = axios.create({
  baseURL: 'http://booking-dev.test/api',
});

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
