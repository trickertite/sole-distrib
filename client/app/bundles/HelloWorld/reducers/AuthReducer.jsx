import jwtDecode from 'jwt-decode';
import localStorage from 'local-storage';

const INITIAL_STATE = {
  isAuthenticating: false,
  currentUser: localStorage.authToken
                ? jwtDecode(localStorage.authToken)
                : null,
  errorMessage: null,
};

const authReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isAuthenticating: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage,
      };
    case 'LOGIN_SUCCESS':
      return {
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null,
      };
    case 'LOGOUT':
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default authReducer;
