import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import authReducer from './AuthReducer';

const indexReducer = combineReducers({ productsReducer, authReducer });

export default indexReducer;
