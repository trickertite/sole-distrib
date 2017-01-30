import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProductContainer from './containers/ProductContainer';
import Register from './containers/RegisterContainer';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductContainer} />
    <Route path="register" component={Register} />
  </Route>
);
