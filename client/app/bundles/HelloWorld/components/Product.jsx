import React, { PropTypes } from 'react';

const Product = (props) => {
  return (
    <li className="list-group-item">{props.product.name}</li>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Product;
