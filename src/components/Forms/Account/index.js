import React from 'react';
import PropTypes from 'prop-types';

export default class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  };

  static propTypes = {
    fetchSignUp: PropTypes.func,
    fetchLogin: PropTypes.func,
    template: PropTypes.string
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const data = this.state;
    e.preventDefault();
    this.props.template === 'signup'
      ? this.props.fetchSignUp(data)
      : this.props.fetchLogin(data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {/* input for the signUp page only */}
          {this.props.template === 'signup' && (
            <React.Fragment>
              <div>
                <label>Prénom</label>
                <input
                  name="firstName"
                  onChange={this.onChange}
                  type="text"
                  value={this.state.value}
                />
              </div>
              <div>
                <label>Nom</label>
                <input
                  name="lastName"
                  onChange={this.onChange}
                  type="text"
                  value={this.state.value}
                />
              </div>
              <div>
                <label>Pseudo</label>
                <input
                  name="userName"
                  onChange={this.onChange}
                  type="text"
                  value={this.state.value}
                />
              </div>
            </React.Fragment>
          )}

          <div>
            <label>Email</label>
            <input
              name="email"
              onChange={this.onChange}
              placeholder="jack@gmail.com"
              type="email"
              value={this.state.value}
            />
          </div>
          <div>
            <label>Mot de passe</label>
            <input
              name="password"
              onChange={this.onChange}
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
