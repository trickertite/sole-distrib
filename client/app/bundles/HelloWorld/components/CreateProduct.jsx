import React, { PropTypes } from 'react';
import Form from 'react-jsonschema-form';
import NotificationSystem from 'react-notification-system';

const schema = {
  title: 'Create Product',
  type: 'object',
  required: ['name', 'price'],
  properties: {
    name: { type: 'string', title: 'name' },
    price: { type: 'number', title: 'price' },
    category: {
      title: 'category',
      type: 'string',
      enum: ['mobile', 'watches', 'detergents'],
      enumNames: ['Mobile', 'Watches', 'Detergents'],
    },
  },
};

// const onSubmit = ({ formData }) => console.log(formData);

export default class CreateProduct extends React.Component {
  propTypes = {
    gofetch: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.submitProduct = this.submitProduct.bind(this);
  }

  componentDidMount() {
    this.notifSystem = this.refs.notificationSystem;
  }

  notifSystem: null

  submitProduct({ formData }) {
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: formData },
      success: (response) => {
        this.props.gofetch();
        this.notifSystem.addNotification({
          message: response.msg,
          level: 'success',
        });
      },
    });
  }

  render() {
    return (
      <div>
        <Form
          schema={schema}
          onSubmit={this.submitProduct}
        />
        <NotificationSystem ref='notificationSystem' />
      </div>
    );
  }
}
