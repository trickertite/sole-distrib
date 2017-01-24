import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';

const indexReducer = combineReducers({ productsReducer });

export default indexReducer;
