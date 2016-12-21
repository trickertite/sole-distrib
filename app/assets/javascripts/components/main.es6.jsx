class Main extends React.Component {

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
      <div>
        <button onClick={this._onButtonClick}>Create Product</button>
        {this.state.showCreateProductFormComp ?
           <CreateProduct /> :
           null
        }
      </div>
    )
  }
}

