import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory }
        from 'react-router';

export default class CreateProduct extends React.Component {
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

