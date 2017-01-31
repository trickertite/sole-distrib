import React from 'react';
import Form from 'react-jsonschema-form';
import { connect } from 'react-redux';
// import { signUpUser } from '../actions/authActions';
import { SignUp } from '../components/SignUp';
import { LogIn } from '../components/Login';
import { login, signUp } from '../actions/authActions';

// const schema = {
//   title: 'Sign Up',
//   type: 'object',
//   required: ['email', 'password'],
//   properties: {
//     first_name: { type: 'string', title: 'first_name' },
//     last_name: { type: 'string', title: 'last_name' },
//     email: { type: 'string', title: 'email' },
//     password: { type: 'string', title: 'password' },
//   },
// };

// const onSubmit = ({formData}) => console.log(formData);

class RegisterContainer extends React.PureComponent {

  render() {
    return (
      <div>
        <SignUp
          signUp={(user) => this.props.signUp(user)}
        />
        <LogIn
          login={(credentials) => this.props.login(credentials)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
    signUp: (user) => {
      dispatch(signUp(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
