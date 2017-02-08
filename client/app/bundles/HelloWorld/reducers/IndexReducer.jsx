import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifReducer } from 'redux-notifications';

import productsReducer from './ProductReducer';
import authReducer from './AuthReducer';

const indexReducer = combineReducers({
  productsReducer,
  authReducer,
  routing: routerReducer,
  notifs: notifReducer,
});

export default indexReducer;
