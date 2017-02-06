import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productsReducer from './ProductReducer';
import authReducer from './AuthReducer';

const indexReducer = combineReducers({
  productsReducer,
  authReducer,
  routing: routerReducer,
});

export default indexReducer;
