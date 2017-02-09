// Simple example of a React "smart" component
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as notifActions } from 'redux-notifications';
import Products from '../components/Products';
import CreateProduct from '../components/CreateProduct';
import { fetchProducts } from '../actions/productActions';
// import * as actions from '../actions/helloWorldActionCreators';

class ProductContainer extends React.PureComponent {
  propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showCreateProductForm: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  onButtonClick() {
    this.setState({
      showCreateProductForm: !this.state.showCreateProductForm,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Products products={this.props.products} />
            <br />
            <button
              onClick={this.onButtonClick}
              className="btn btn-primary"
              data-toggle="button"
            >Create Product</button>
            {this.state.showCreateProductForm ?
              <CreateProduct
                gofetch={() => this.props.fetchProducts()}
                notifSend={notif => this.props.notifSend(notif)}
              /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => ({
  products: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    notifSend: (notif) => {
      dispatch(notifActions.notifSend(notif));
    },
  };
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
