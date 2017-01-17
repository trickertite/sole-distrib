import { createStore, applyMiddleware } from 'redux';
import productReducer, {initialState as ProductInitialState} from '../reducers/ProductReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from "redux-promise-middleware";

const configureStore = (railsProps) => (
  applyMiddleware(thunk, logger(), promise())(createStore)(productReducer, railsProps)
);

export default configureStore;
