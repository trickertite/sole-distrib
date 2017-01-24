import { createStore, applyMiddleware } from 'redux';
import indexReducer from '../reducers/IndexReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from "redux-promise-middleware";

const configureStore = (railsProps) => (
  applyMiddleware(thunk, logger(), promise())(createStore)(indexReducer, railsProps)
);

export default configureStore;
