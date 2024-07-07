import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        timeout: 1000,
    },
    // .. other options
});

export default axiosInstance;