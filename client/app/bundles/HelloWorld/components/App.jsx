import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class CreateProduct extends React.Component {
  propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <p>Header here</p>

        <Link to="/register">register</Link>

        <div className="container">
          {this.props.children}
        </div>

        <p>Footer here</p>
      </div>
    );
  }
}
