import React, { PropTypes } from 'react';
import Product from './Product';

export default class Products extends React.Component {
  propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const productListItems =
    this.props.products.products.map((product) => {
      return (<Product
        product={product}
        key={product.id}
      />);
    });

    return (
      <ul className="products list-group">
        {productListItems}
      </ul>
    );
  }
}
