import React, { PropTypes } from 'react';
import Form from "react-jsonschema-form";
import NotificationSystem from 'react-notification-system';

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

// const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => console.log(formData);

export default class CreateProduct extends React.Component {
  _notificationSystem: null

  constructor() {
    super();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  submitProduct(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let price = this.refs.price.value;
    let category = this.refs.category.value;
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: { name: name, price: price, category: category } },
      success: (response) => {
        this._notificationSystem.addNotification({
          message: response.msg,
          level: 'success'
        });
      }
    });
  }

  render () {
    return (
      // <div>
      //   <form onSubmit={this.submitProduct.bind(this)}>
      //     <input id="name" ref="name" placeholder="Enter Product Name"/>
      //     <input id="price" ref="price" placeholder="Enter Product Price"/>
      //     <select ref="category" name="category" id="category">
      //       <option value="mobile">Mobile</option>
      //       <option value="watches">Watches</option>
      //       <option value="detergents">Detergents</option>
      //     </select>
      //     <button type="submit">Submit</button>
      //   </form>
      //   <NotificationSystem ref="notificationSystem" />
      // </div>

<Form schema={schema}
        onSubmit={onSubmit} />
    )
  }
}

