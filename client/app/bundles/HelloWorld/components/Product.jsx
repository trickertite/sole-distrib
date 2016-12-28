import React, { PropTypes } from 'react';

export default class Product extends React.Component {

  constructor() {
    super();
  }

  render () {
    return (
        <li>{this.props.product.name}</li>
    )
  }
}

