import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/SignUp';
import LogIn from '../components/Login';
import { login, signUp } from '../actions/authActions';

class RegisterContainer extends React.PureComponent {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <SignUp
          signUp={user => this.props.signUp(user)}
        />
        <LogIn
          login={credentials => this.props.login(credentials)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (credentials) => {
    dispatch(login(credentials));
  },
  signUp: (user) => {
    dispatch(signUp(user));
  },
});

export default connect(null, mapDispatchToProps)(RegisterContainer);
