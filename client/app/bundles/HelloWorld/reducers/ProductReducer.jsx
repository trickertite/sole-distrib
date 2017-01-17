import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const products = (state = {
  products: [],
}, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_FULFILLED':
      return Object.assign({}, state, {
        products: state.products.concat(action.payload.data)
      });
    default:
      return state;
  }
};

const productReducer = combineReducers({ products });

export default productReducer;
