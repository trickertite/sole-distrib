import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {
  propTypes = {
    children: PropTypes.node,
  }
  render() {
    return (
      <div>
        <p>Header here</p>


        <div className="container">
          <LinkContainer to={{ pathname: '/register' }}>
            <Button bsStyle="primary">Register</Button>
          </LinkContainer>
          {this.props.children}
        </div>

        <p>Footer here</p>
      </div>
    );
  }
}
