import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default class CreateProduct extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.auth.content });
export default connect(mapStateToProps)(ProductContainer);
