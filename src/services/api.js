import axios from 'axios';

const api = axios.create({
    baseURL: 'https://redspace.pagian.dev/wp-json/',
})

export default api;