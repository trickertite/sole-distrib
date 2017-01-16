// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
// import * as actions from '../actions/helloWorldActionCreators';
class ProductContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCreateProductFormComp: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({showCreateProductFormComp: true});
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Products products={this.props.products} />
            <br/>
            <button onClick={this._onButtonClick} className="btn btn-primary">Create Product</button>
            {this.state.showCreateProductFormComp ?
               <CreateProduct /> :
               null
            }
          </div>
        </div>
      </div>
    )
  }
}

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ products: state.products });

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(ProductContainer);
