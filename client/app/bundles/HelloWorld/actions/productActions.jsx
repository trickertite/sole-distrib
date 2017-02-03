import axios from 'axios';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios({
    method: 'get',
    url: '/products',
    headers: {
      Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
      'eyJleHAiOjE0ODYxODcwNzksInN1YiI6Mn0.' +
      '5sNtxyK7ZWmN_FXSYAh7ZwiflLn4Emyo4YOynK15gFA',
    },
  }),
});
