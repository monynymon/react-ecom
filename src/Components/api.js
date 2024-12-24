import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('Fetched products:', response.data); // Log data here
        return response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
};
