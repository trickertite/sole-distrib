import axios from 'axios';
import localStorage from 'local-storage';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios({
    method: 'get',
    url: '/products',
    headers: {
      Authorization: `Bearer ${localStorage.get('authToken')}`,
    },
  }),
});
