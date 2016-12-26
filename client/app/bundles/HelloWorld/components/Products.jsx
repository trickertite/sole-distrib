import React, { PropTypes } from 'react';
import Product from './Product';

export default class Products extends React.Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

componentDidMount() { $.getJSON('/products', (response) => { 
  console.log(response);
  this.setState({ products: response.products }) });
}

  render () {
    // let createProduct = ({product}) => <Product product={product} />
    // return this.state.products.map((product));
    return <Product product={{name: 'samsung'}} />
  }
}

