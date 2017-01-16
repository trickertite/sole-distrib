import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const products = (state = {
  products: []
}, action) => {
  return state;
  // switch (action.type) {
  //   case HELLO_WORLD_NAME_UPDATE:
  //     return action.text;
  //   default:
  //     return state;
  // }
};

const productReducer = combineReducers({ products });

export default productReducer;
