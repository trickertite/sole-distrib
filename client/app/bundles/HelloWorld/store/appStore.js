import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import indexReducer from '../reducers/IndexReducer';

const configureStore = railsProps => (
  applyMiddleware(thunk, logger(), promise(), routerMiddleware(browserHistory))(createStore)(indexReducer, railsProps)
);

export default configureStore;
