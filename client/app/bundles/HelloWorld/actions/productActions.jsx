import axios from 'axios';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios({
    method: 'get',
    url: '/products',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODYxMDAyMTksInN1YiI6Mn0.xegMtnWq1xSTOxgZGq_WgPY31QGVAjYzRaYB6D5idP4',
    },
  }),
});
