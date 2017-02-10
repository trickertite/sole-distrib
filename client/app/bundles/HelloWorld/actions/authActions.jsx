import jwtDecode from 'jwt-decode';
import axios from 'axios';
import localStorage from 'local-storage';
import { actions as notifActions } from 'redux-notifications';
import { push } from 'react-router-redux';
import { store } from '../startup/MainApp';


export const login = (credentials) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    const authHash = {
      auth: credentials,
    };

    axios.post('/user_token', authHash).then((res) => {
      localStorage.set('authToken', res.data.jwt);

      store.dispatch(push('/products'));
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: jwtDecode(res.data.jwt),
      });
      dispatch(notifActions.notifSend({
        message: 'login successfully',
        kind: 'success',
        dismissAfter: 2000,
      }));
    }).catch((res) => {
      dispatch({
        type: 'LOGIN_FAILURE',
        errorMessage: res.data.error,
      });
    });
  };
};

export const logout = () => {
  delete localStorage.authToken;
  return { type: 'LOGOUT' };
};


export const signUp = (user) => {
  return (dispatch) => {
    axios.post('/users', user).then((res) => {
      dispatch(notifActions.notifSend({
        message: 'User Created successfully',
        kind: 'success',
        dismissAfter: 2000,
      }));
    }).catch((error) => {
      return error;
    });
  };
};
