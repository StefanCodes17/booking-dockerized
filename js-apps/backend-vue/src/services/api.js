import axios from 'axios';

let api = axios.create({
    baseURL: 'http://booking-dev.test/api',
});

export default api;
