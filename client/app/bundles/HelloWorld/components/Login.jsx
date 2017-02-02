import React, { PropTypes } from 'react';
import Form from 'react-jsonschema-form';

const schema = {
  title: 'Sign In',
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: { type: 'string', title: 'email' },
    password: { type: 'string', title: 'password' },
  },
};

export default class LogIn extends React.Component {
  propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login({ formData }) {
    this.props.login(formData);
  }

  render() {
    return (
      <div>
        <Form
          schema={schema}
          onSubmit={this.login}
        />
      </div>
    );
  }
}
