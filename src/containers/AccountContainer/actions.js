import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';
import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './constants';

// SIGNUP

export const signUpRequest = () => ({ type: SIGNUP_REQUEST });

export const signUpFailed = error => ({
  type: SIGNUP_FAILED,
  error
});

export const signUpSuccess = success => ({ type: SIGNUP_SUCCESS, success });

export const fetchSignUp = data => async dispatch => {
  dispatch(signUpRequest());

  const fetchSignUp = await fetch('http://localhost:3005/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (fetchSignUp.status === 200) {
    return dispatch(signUpSuccess(fetchSignUp));
  } else {
    return dispatch(signUpFailed(fetchSignUp));
  }
};

// LOGIN

export const loginSuccess = success => ({ type: LOGIN_SUCCESS, success });

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const fetchLogin = data => async dispatch => {
  dispatch(loginRequest());

  const fetchLogin = await fetch('http://localhost:3005/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  console.log(fetchLogin);
  if (fetchLogin.status === 200) {
    return dispatch(loginSuccess(fetchLogin));
  } else {
    return dispatch(loginFailed(fetchLogin));
  }
};
