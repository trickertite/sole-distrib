import React, { PropTypes } from 'react';

export default class CreateProduct extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <p>Header here</p>

      <div className="container">
        {this.props.children}
      </div>

      <p>Footer here</p>
      </div>
    );
  }
}

