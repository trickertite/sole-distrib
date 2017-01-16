import { createStore } from 'redux';
import productReducer from '../reducers/ProductReducer';

const configureStore = (railsProps) => (
  createStore(productReducer, railsProps)
);

export default configureStore;
