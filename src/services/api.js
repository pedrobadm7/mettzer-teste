  
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://core.ac.uk:443/api-v2',
});

export default api;