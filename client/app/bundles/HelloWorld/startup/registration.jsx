import ReactOnRails from 'react-on-rails';

// import Main from '../components/Main';
// import CreateProduct from '../components/CreateProduct';

// This is how react_on_rails can see the HelloWorld in the browser.
// ReactOnRails.register({
//   Main,
//   CreateProduct,
// });

import ProductApp from './ProductApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ProductApp,
});
