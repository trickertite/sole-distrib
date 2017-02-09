import React, { PropTypes } from 'react';
import Form from 'react-jsonschema-form';

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
    notifSend: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.submitProduct = this.submitProduct.bind(this);
  }

  notifSystem: null

  submitProduct({ formData }) {
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: formData },
      success: (response) => {
        this.props.gofetch();
        this.props.notifSend({
          message: response.msg,
          kind: 'success',
          dismissAfter: 2000,
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
      </div>
    );
  }
}
