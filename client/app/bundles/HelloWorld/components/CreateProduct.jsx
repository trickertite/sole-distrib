import React, { PropTypes } from 'react';
import Form from "react-jsonschema-form";
import NotificationSystem from 'react-notification-system';

const schema = {
  title: "Create Product",
  type: "object",
  required: ["name", "price"],
  properties: {
    name: {type: "string", title: "name"},
    price: {type: "number", title: "price"},
    category: {
      title: "category",
      type: "string",
      enum: ["mobile", "watches", "detergents"],
      enumNames: ["Mobile", "Watches", "Detergents"]
    }
  }
};

const onSubmit = ({formData}) => console.log(formData);

export default class CreateProduct extends React.Component {
  _notificationSystem: null

  constructor() {
    super();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  submitProduct({formData}) {
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: formData },
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
      <div>
        <Form schema={schema}
              onSubmit={this.submitProduct.bind(this)} />
        <NotificationSystem ref="notificationSystem" />
      </div>
    )
  }
}

