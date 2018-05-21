import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const InputStyled = styled.input`
  height: 20px;
  margin-bottom: 10px;
  width: 250px;
`;

export default class Account extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  };

  static propTypes = {
    error: PropTypes.string,
    fetchSignUp: PropTypes.func,
    fetchLogin: PropTypes.func,
    isFetching: PropTypes.bool,
    login: PropTypes.bool,
    register: PropTypes.bool,
    template: PropTypes.string
  };

  static defaultProps = {
    error: null,
    isFetching: false,
    login: false,
    register: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = this.state;
    const { fetchSignUp, fetchLogin, template } = this.props;
    // adapt the submit function according to the form (template)
    template === 'signup' ? fetchSignUp(data) : fetchLogin(data);
  };

  render() {
    const { login, register, template } = this.props;
    // redirect when the user finish the inscription
    if (register && template === 'signup') {
      return <Redirect to="/login" />;
    }
    // redirect when the user login
    if (login) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {/* inputs for the signUp page only */}
          {template === 'signup' && (
            <React.Fragment>
              <div>
                <InputStyled
                  name="firstName"
                  onChange={this.onChange}
                  placeholder="Prénom"
                  required
                  type="text"
                  value={this.state.value}
                />
              </div>
              <div>
                <InputStyled
                  name="lastName"
                  onChange={this.onChange}
                  placeholder="Nom"
                  required
                  type="text"
                  value={this.state.value}
                />
              </div>
              <div>
                <InputStyled
                  name="userName"
                  onChange={this.onChange}
                  placeholder="Pseudo"
                  required
                  type="text"
                  value={this.state.value}
                />
              </div>
            </React.Fragment>
          )}

          <div>
            <InputStyled
              name="email"
              onChange={this.onChange}
              placeholder="jack@gmail.com"
              required
              type="email"
              value={this.state.value}
            />
          </div>
          <div>
            <InputStyled
              name="password"
              onChange={this.onChange}
              placeholder="Password"
              required
              type="password"
              value={this.state.value}
            />
          </div>
          <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
}
