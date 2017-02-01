import React, { PropTypes } from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  title: 'Sign Up',
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: { type: 'string', title: 'email' },
    password: { type: 'string', title: 'password' },
    first_name: { type: 'string', title: 'first_name' },
  },
};

export default class SignUp extends React.Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.signUp = this.signUp.bind(this);
  }

  signUp({ formData }) {
    this.props.signUp(formData);
  }

  render() {
    return (
      <div>
        <Form
          schema={schema}
          onSubmit={this.signUp}
        />
      </div>
    );
  }
}
