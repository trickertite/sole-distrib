// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import {fetchProducts} from '../actions/productActions';
// import * as actions from '../actions/helloWorldActionCreators';

class ProductContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCreateProductFormComp: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  _onButtonClick() {
    this.setState({showCreateProductFormComp: !this.state.showCreateProductFormComp});
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Products products={this.props.products} />
            <br/>
            <button onClick={this._onButtonClick} className="btn btn-primary" data-toggle="button">Create Product</button>
            {this.state.showCreateProductFormComp ?
               <CreateProduct gofetch={() => this.props.fetchProducts()} /> :
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(fetchProducts());
        }
    };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
