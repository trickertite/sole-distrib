import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const products = (state = {
  products: [],
  name: 'hello world',
  age: 234
}, action) => {
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
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
      console.log(state);
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
      // return Object.assign({}, state, {
      //   products: state.concat(action.payload.data)
      // })
      return state;
    default:
      return state;
  }
  // return state;
};

const productReducer = combineReducers({ products });

export default productReducer;
