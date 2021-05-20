import axios from 'axios'

const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://localhost:5020';

console.log(process.env);

const api = axios.create({
    baseURL: `${apiUrl}/api`
})

export default api;
