import React from 'react';
import Form from 'react-jsonschema-form';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/authActions';

const schema = {
  title: 'Sign Up',
  type: 'object',
  required: ['email', 'password'],
  properties: {
    first_name: { type: 'string', title: 'first_name' },
    last_name: { type: 'string', title: 'last_name' },
    email: { type: 'string', title: 'email' },
    password: { type: 'string', title: 'password' },
  },
};

// const onSubmit = ({formData}) => console.log(formData);

class RegisterContainer extends React.PureComponent {

  signUp({ formData }) {
    this.props.signUpUser(formData);
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

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user) => {
      dispatch(signUpUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
