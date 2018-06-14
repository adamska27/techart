import decode from 'jwt-decode';
import Slider from 'rc-slider';
import styled from 'styled-components';
import React from 'react';
import { Redirect } from 'react-router';

import 'rc-slider/assets/index.css';

const ContainerArt = styled.div`
  display: flex;
  height: 350px;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`;

const ContainerTech = ContainerArt.extend`
  flex-direction: column;
  width: 50%;
`;

const InputStyled = styled.input`
  height: 20px;
  margin-bottom: 10px;
  width: 250px;
`;

const SliderContainer = styled.div`
  float: left;
  width: 160;
  height: 400;
  margin-bottom: 160;
  margin-left: 50;
`;

const marks = {
  1: 'mauvais',
  3: 'bof',
  5: 'moyen',
  7: 'bon',
  9: 'très bon',
  10: 'excellent'
};

const marks2 = {
  1: '1',
  3: '3',
  5: '5',
  7: '7',
  9: '9',
  10: '10'
};

export default class Ratings extends React.PureComponent {
  state = {
    story: 5,
    feeling: 5,
    levelDesign: 5,
    artDesign: 5,
    originality: 5,
    soundDesign: 5,
    textures: 5,
    framerate: 5,
    physics: 5,
    lighting: 5,
    redirect: false
  };

  onChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = this.state;
    const { jwt, productId } = this.props;
    const decodedToken = jwt ? decode(jwt) : null;
    const result = await this.props.fetchSubmitRatings(
      decodedToken.id,
      productId,
      data
    );
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <h1>ART</h1>
          <ContainerArt>
            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'story')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'feeling')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'levelDesign')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'artDesign')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'originality')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'soundDesign')}
                defaultValue={5}
              />
            </SliderContainer>
          </ContainerArt>

          <h1>Tech</h1>
          <ContainerTech>
            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'textures')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'framerate')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'physics')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'lighting')}
                defaultValue={5}
              />
            </SliderContainer>
          </ContainerTech>
          <button type="submit">Valider</button>
        </form>
      </React.Fragment>
    );
  }
}
