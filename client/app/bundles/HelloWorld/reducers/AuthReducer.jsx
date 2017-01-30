import { AUTH_USER,
         UNAUTH_USER,
         AUTH_ERROR,
         PROTECTED_TEST,
         SIGN_UP_USER_FULFILLED } from '../constants/authConstants';

const INITIAL_STATE = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null,
};

// const authReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case AUTH_USER:
//       return {
//         ...state,
//         error: '',
//         message: '',
//         authenticated: true,
//       };
//     case UNAUTH_USER:
//       return { ...state, authenticated: false };
//     case AUTH_ERROR:
//       return { ...state, error: action.payload };
//     case PROTECTED_TEST:
//       return { ...state, content: action.payload };
//     case SIGN_UP_USER_FULFILLED:
//       console.log('signup successful');
//       return { ...state };
//     default:
//       return { ...state };
//   }

//   return state;
// };

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
