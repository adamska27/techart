import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from './constants';

// SIGNUP

export const signUpRequest = () => ({ type: SIGNUP_REQUEST });

export const signUpFailed = error => ({
  type: SIGNUP_FAILED,
  error
});

export const signUpSuccess = message => ({ type: SIGNUP_SUCCESS, message });

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
    const result = await fetchSignUp.json();
    return dispatch(signUpSuccess(result));
  } else {
    const error = await fetchSignUp.json();
    return dispatch(signUpFailed(error));
  }
};

// LOGIN

export const loginSuccess = jwt => ({ type: LOGIN_SUCCESS, jwt });

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
  const jwt = await fetchLogin.json();
  if (jwt) {
    return dispatch(loginSuccess(jwt));
  } else {
    return dispatch(loginFailed(jwt));
  }
};

// LOGOUT

export const logout = () => ({ type: LOGOUT });
