import React, { PropTypes } from 'react';
import Product from './Product';

export default class Products extends React.Component {
  render () {
    console.log('********************************************');
    console.log(this.props.products);
    console.log('********************************************');
    let productListItems = this.props.products.products.map((product, index) => {
      return <Product product={{name: product.name}} key={index} />;
    });

    return (
      <ul className="products list-group">
        {productListItems}
      </ul>
    )
  }
}

