import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactFilestack from 'filestack-react';
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
    password: '',
    profilePicture: null
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

  onSuccess = result => {
    const url = idx(result, _ => _.filesUploaded[0].url);
    this.setState({ profilePicture: url });
  };

  render() {
    const { login, register, template } = this.props;
    const options = {
      accept: 'image/*',
      maxFiles: 1,
      storeTo: {
        location: 's3'
      }
    };
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
              <ReactFilestack
                apikey={process.env.REACT_APP_FILESTACK_KEY}
                mode={'pick'}
                options={options}
                onSuccess={this.onSuccess}
                render={({ onPick }) => (
                  <div>
                    <strong>photo de profil: </strong>
                    <button onClick={onPick}>Pick</button>
                  </div>
                )}
              />
              {this.state.profilePicture && (
                <div>
                  <img
                    style={{ width: '150px', height: '150px' }}
                    src={this.state.profilePicture}
                    alt="profile-picture"
                  />
                </div>
              )}
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
