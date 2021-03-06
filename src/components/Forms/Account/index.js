import idx from 'idx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactFilestack from 'filestack-react';
import { Redirect } from 'react-router-dom';
import Slider from 'rc-slider';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';
import media from '../../../styles/media';

import Button from '../../common/Button';
import Input from '../../common/Input';
import { Normal } from '../../common/Text';
import UserIcon from '../../UserIcon';

const marks = {
  1: 'not at all',
  3.25: 'blah',
  5.5: 'yes',
  7.75: 'a lot',
  10: `I love it`
};

const ButtonStyled = styled(Button)`
  font-size: 14px;
  height: 36px;
  margin: 6px auto;
`;

const ButtonSubmit = styled(Button)`
  font-size: 14px;
  height: 42px;
  margin: 0 auto;
`;

const ButtonSubmitContainer = styled.div`
  margin: 24px auto 0 auto;
  width: 50%;

  ${media.tablet`
    width: 70%;
  `};

  ${media.phone`
    width: 100%;
  `};
`;

const GamerProfileContainer = styled.div`
  margin: 0 auto;
  width: 60%;

  ${media.tablet`
    width: 100%;
  `};
`;

const GamerProfileToggle = styled.div`
  margin: 24px auto 0 auto;
  width: 50%;

  ${media.tablet`
  width: 70%;
  `};

  ${media.phone`
  width: 100%;
  `};
`;

const InputStyled = styled(Input)`
  margin: 0 auto;
  width: 50%;

  ${media.tablet`
    width: 70%;
  `};

  ${media.phone`
    width: 100%;
  `};
`;

const FormStyled = styled.form`
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 12px;
`;

const NormalStyled = styled(Normal)`
  padding: 12px 0;
`;

const ProfilePictureContainer = styled.div`
  color: ${({ theme }) => theme.color.sideColor};
  margin: 0 auto;
  padding-top: 24px;
  width: 50%;

  ${media.tablet`
  width: 70%;
  `};

  ${media.phone`
  width: 100%;
  `};
`;

const SliderContainer = styled.div`
  margin: 36px;
  text-align: center;
`;

export default class Account extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    profilePicture: 'https://cdn.filestackcontent.com/Nes1kLxSwC7YqVEBF1fR',
    gamerProfile: {
      rpg: 5,
      adventure: 5,
      action: 5,
      versus: 5,
      shooter: 5,
      platform: 5,
      sport: 5,
      auto: 5,
      str: 5,
      horror: 5
    },
    showGamerProfilSlider: false,
    focus: false,
    redirect: false
  };

  static propTypes = {
    error: PropTypes.object,
    fetchLogin: PropTypes.func.isRequired,
    fetchSignUp: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    login: PropTypes.bool.isRequired,
    template: PropTypes.string
  };

  static defaultProps = {
    error: null,
    isFetching: false,
    login: false
  };

  onGamerProfileChange = (value, name) => {
    const { gamerProfile } = this.state;
    this.setState({
      gamerProfile: {
        ...gamerProfile,
        [name]: value
      }
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    let data;
    if (this.state.showGamerProfilSlider) {
      data = this.state;
    } else {
      const {
        firstName,
        lastName,
        userName,
        email,
        password,
        profilePicture
      } = this.state;
      data = Object.assign(
        {},
        {
          firstName,
          lastName,
          userName,
          email,
          password,
          profilePicture
        }
      );
    }
    const { fetchSignUp, fetchLogin, template } = this.props;
    // adapt the submit function according to the form (template)
    const result =
      template === 'signup' ? await fetchSignUp(data) : await fetchLogin(data);
    if (template === 'signup' && !result.error) {
      this.setState({ redirect: true });
    }
  };

  onSuccessProfilePicture = result => {
    const url = idx(result, _ => _.filesUploaded[0].url);
    this.setState({ profilePicture: url });
  };

  showGamerProfilSlider = () => {
    this.setState({ showGamerProfilSlider: true });
  };

  sliderLabel = label => <NormalStyled>Do you like {label} ?</NormalStyled>;

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    const { login, template } = this.props;
    const { redirect, showGamerProfilSlider } = this.state;
    const options = {
      accept: 'image/*',
      imageDim: [100, 100],
      maxFiles: 1,
      storeTo: {
        location: 's3'
      }
    };
    // // redirect when the user finish the inscription
    if (redirect && template === 'signup') {
      return <Redirect to="/login" />;
    }

    // redirect when the user login
    if (login) {
      return <Redirect to="/" />;
    }
    return (
      <FormContainer>
        <FormStyled onSubmit={this.onSubmit}>
          {/* inputs for the signUp page only */}
          {template === 'signup' && (
            <React.Fragment>
              <InputStyled
                label="Firstname"
                name="firstName"
                onChange={this.onChange}
                required
                type="text"
                value={this.state.firstName}
              />
              <InputStyled
                label="Lastname"
                name="lastName"
                onChange={this.onChange}
                required
                type="text"
                value={this.state.lastName}
              />
              <InputStyled
                label="Username"
                name="userName"
                onChange={this.onChange}
                required
                type="text"
                value={this.state.userName}
              />
              <ReactFilestack
                apikey={process.env.REACT_APP_FILESTACK_KEY}
                mode={'pick'}
                options={options}
                onSuccess={this.onSuccessProfilePicture}
                render={({ onPick }) => (
                  <ProfilePictureContainer>
                    <strong>Profile picture: </strong>
                    <ButtonStyled
                      onClick={onPick}
                      value="Choose a profile picture now?"
                    />
                  </ProfilePictureContainer>
                )}
              />
              {this.state.profilePicture && (
                <UserIcon profilePicture={this.state.profilePicture} />
              )}

              {showGamerProfilSlider ? (
                <GamerProfileContainer>
                  <SliderContainer>
                    {this.sliderLabel('rpg')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'rpg')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('adventure')}
                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'adventure')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('action')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'action')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('platform')}
                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'platform')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('versus')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'versus')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('shooter')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'shooter')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>

                  <SliderContainer>
                    {this.sliderLabel('sport')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'sport')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                  <SliderContainer>
                    {this.sliderLabel('auto')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'auto')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>

                  <SliderContainer>
                    {this.sliderLabel('str')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'str')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>

                  <SliderContainer>
                    {this.sliderLabel('horror')}

                    <Slider
                      included={false}
                      min={1}
                      max={10}
                      marks={marks}
                      step={2.5}
                      onChange={value =>
                        this.onGamerProfileChange(value, 'horror')
                      }
                      defaultValue={5}
                    />
                  </SliderContainer>
                </GamerProfileContainer>
              ) : (
                <GamerProfileToggle>
                  <ButtonStyled
                    type="button"
                    onClick={this.showGamerProfilSlider}
                    value="Complete your gamer profile right now ?"
                  />
                </GamerProfileToggle>
              )}
            </React.Fragment>
          )}

          <InputStyled
            label="Email"
            name="email"
            onChange={this.onChange}
            required
            type="email"
            value={this.state.email}
          />
          <InputStyled
            label="Password"
            name="password"
            onChange={this.onChange}
            required
            type="password"
            value={this.state.password}
          />

          <ButtonSubmitContainer>
            <ButtonSubmit type="submit" value="Validate" />
          </ButtonSubmitContainer>
        </FormStyled>
      </FormContainer>
    );
  }
}
