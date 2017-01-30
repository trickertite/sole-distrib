import axios from 'axios';

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS',
  payload: axios({
    method: 'get',
    url: '/products',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODU4NDkwMzAsInN1YiI6Mn0.TOGH7DcIbMMGP0Z5smxxXMsRzOWXvlja-t9zwSgoZdA',
    },
  }),
});
