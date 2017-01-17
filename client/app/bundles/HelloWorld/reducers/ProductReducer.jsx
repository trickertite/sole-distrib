import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

export const initialState = {
  products: [],
  name: '',
  age: 34,
};

const products = (state = {
  products: [],
  name: '',
  age: 34,
}, action) => {
      console.log('&&&&&&&&&&&&&&&&&& state &&&&&&&&&&&&&&&&&&');
      console.log(state);
      console.log('&&&&&&&&&&&&&&&&&& state &&&&&&&&&&&&&&&&&&');
  switch (action.type) {
    case 'FETCH_PRODUCTS_FULFILLED':
      // action.payload.then(function (response) {
      //   return Object.assign({}, state, {
      //     products: response.data
      //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      console.log('&&&&&&&&&&&&&&&&&& state &&&&&&&&&&&&&&&&&&');
      console.log(state);
      console.log('&&&&&&&&&&&&&&&&&& state &&&&&&&&&&&&&&&&&&');
      return Object.assign({}, state, {
        products: state.products.concat(action.payload.data)
      })
      // return state;
    default:
      return state;
  }
  // return state;
};

const productReducer = combineReducers({ products });

export default productReducer;
