import axios from 'axios';

const api = axios.create({
    baseURL : 'https://dummyjson.com',
})

export default async function getProducts() {
    const response = await api.get('/products?limit=100');
    return response.data.products
    
}