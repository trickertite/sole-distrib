// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
// import Products from '../components/Products';
// import * as actions from '../actions/helloWorldActionCreators';
class ProductContainer extends React.PureComponent {
  render () {
    return (
      // <ul className="products list-group">
      //   {productListItems}
      // </ul>
      <div>Hello hassan</div>
    )
  }
}

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ products: state.products });

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(ProductContainer);
