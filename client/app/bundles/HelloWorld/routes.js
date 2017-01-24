import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProductContainer from './containers/ProductContainer';
import CreateProduct from './components/CreateProduct';
import App from './components/App';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={ProductContainer} />
    <Route path="create" component={CreateProduct} />
  </Route>
);
