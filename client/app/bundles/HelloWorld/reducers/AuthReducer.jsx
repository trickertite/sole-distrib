import { AUTH_USER,
         UNAUTH_USER,
         AUTH_ERROR,
         PROTECTED_TEST,
         SIGN_UP_USER_FULFILLED } from '../constants/authConstants';

const INITIAL_STATE = {
  error: '',
  message: '',
  content: '',
  authenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: '',
        message: '',
        authenticated: true,
      };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case PROTECTED_TEST:
      return { ...state, content: action.payload };
    case SIGN_UP_USER_FULFILLED:
      console.log('signup successful');
      return { ...state };
    default:
      return { ...state };
  }

  return state;
};

export default authReducer;
