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
  this.setState({ products: response }) });
}

  render () {
    let productListItems = this.state.products.map((product, index) => {
      return <Product product={{name: product.name}} key={index} />;
    });

    return (
      <ul className="products">
        {productListItems}
      </ul>
    )
  }
}

