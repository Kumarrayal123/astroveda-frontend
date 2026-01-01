
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to add the auth token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for better error handling
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Log detailed error information
        if (error.response) {
            console.error('API Error Response:', {
                status: error.response.status,
                data: error.response.data,
                url: error.config?.url,
                method: error.config?.method
            });


            // Handle specific error codes
            if (error.response.status === 401) {
                console.error('Unauthorized - Token may be invalid or expired');
                // Clear invalid token and redirect to login
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            } else if (error.response.status === 403) {
                console.error('Forbidden - Insufficient permissions');
            } else if (error.response.status === 400 &&
                error.response.data?.message === 'Invalid Token') {
                // Handle invalid token from backend
                console.error('Invalid Token - Clearing localStorage and redirecting to login');
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            } else if (error.response.status === 500) {
                console.error('Server Error - Please try again later');
            }
        } else if (error.request) {
            console.error('No response received from server:', error.request);
            console.error('API Base URL:', process.env.REACT_APP_API_URL || 'http://localhost:5000/api');
        } else {
            console.error('Error setting up request:', error.message);
        }

        return Promise.reject(error);
    }
);

export default api;
