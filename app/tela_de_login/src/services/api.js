import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4000',
});

export const createSession = async (user_name, password) => {
    return api.post('/login', { user_name, password});
};