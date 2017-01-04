import React, { PropTypes } from 'react';
import CreateProduct from './CreateProduct';
import Products from './Products';

export default class Main extends React.Component {

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
            <Products />
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

