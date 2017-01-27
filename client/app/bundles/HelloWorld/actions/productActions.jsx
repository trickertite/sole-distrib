import axios from 'axios';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios.get('/products'),
});
