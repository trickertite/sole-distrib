import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProductContainer from './containers/ProductContainer';
import Register from './containers/RegisterContainer';
import App from './components/App';
import SignIn from './components/Login';
import SignUp from './components/SignUp';

export default (
  <Route path="/" component={App}>
    <Route path="/register" component={Register} >
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
    <Route path="/products" component={ProductContainer} />
  </Route>
);
