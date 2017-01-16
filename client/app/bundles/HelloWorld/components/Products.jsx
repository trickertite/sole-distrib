import React, { PropTypes } from 'react';
import Product from './Product';

export default class Products extends React.Component {
  render () {
    let productListItems = this.props.products.map((product, index) => {
      return <Product product={{name: product.name}} key={index} />;
    });

    return (
      <ul className="products list-group">
        {productListItems}
      </ul>
    )
  }
}

