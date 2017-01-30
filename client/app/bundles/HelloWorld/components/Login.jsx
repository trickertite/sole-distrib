import React from 'react';
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

// const onSubmit = ({formData}) => console.log(formData);

export class LogIn extends React.Component {

  login({ formData }) {
    this.props.login(formData);
  }

  render() {
    return (
      <div>
        <Form
          schema={schema}
          onSubmit={this.login.bind(this)}
        />
      </div>
    );
  }
}
