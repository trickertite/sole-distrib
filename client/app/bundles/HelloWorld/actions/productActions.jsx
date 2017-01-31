import axios from 'axios';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios({
    method: 'get',
    url: '/products',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODU5MzY3MTUsInN1YiI6Mn0.fXgn25Q9GJj3vJJw3a9ja3gPu0TTQ4Yu10KJbDocKlc',
    },
  }),
});
