import jwtDecode from 'jwt-decode';
import axios from 'axios';
import localStorage from 'local-storage';

export const login = (credentials) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    const authHash = {
      auth: credentials,
    };

    axios.post('/user_token', authHash).then((res) => {
      localStorage.set('authToken', res.data.jwt);

      dispatch({
        type: 'LOGIN_SUCCESS',
        user: jwtDecode(res.data.jwt),
      });
    }).catch((res) => {
      dispatch({
        type: 'LOGIN_FAILURE',
        errorMessage: res.data.error,
      });
    });
  };
};

export const signUp = (user) => {
  return () => {
    axios.post('/users', user).then((res) => {
      return res;
    }).catch((error) => {
      return error;
    });
  };
};
