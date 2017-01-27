import * as productConstants from '../constants/productConstants';

const productsReducer = (state = {
  products: [],
}, action) => {
  switch (action.type) {
    case productConstants.FETCH_PRODUCTS_FULFILLED:
      return Object.assign({}, state, {
        products: action.payload.data,
      });
    default:
      return state;
  }
};

export default productsReducer;
