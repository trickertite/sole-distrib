import React from 'react';
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

// const onSubmit = ({formData}) => console.log(formData);

export class SignUp extends React.Component {

  signUp({ formData }) {
    this.props.signUp(formData);
  }

  render() {
    return (
      <div>
        <Form
          schema={schema}
          onSubmit={this.signUp.bind(this)}
        />
      </div>
    );
  }
}
